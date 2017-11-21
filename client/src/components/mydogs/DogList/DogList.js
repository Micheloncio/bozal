
import React, {Component} from 'react'

import CapitalLetter from '../../../utilities/CapitalLetter'

import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

class DogList extends Component{
	constructor(){
		super()

		this.state={
			modalDeleteShow: 0,
			modalEditShow: 0
		}
	}

	setmodalModalDeleteShow = (modalDeleteShow) => {
		this.setState({modalDeleteShow})
	}
	setmodalModalEditShow = (modalEditShow) => {
		this.setState({modalEditShow})
	}

	handleEdit = (e,index) => {
		if(e){
			e.preventDefault()
			e.stopPropagation()
			e.nativeEvent.stopImmediatePropagation()
		}
		this.setmodalModalEditShow(index || 0)
	}
	handleDelete = (e,index) => {
		if(e){
			e.preventDefault()
			e.stopPropagation()
			e.nativeEvent.stopImmediatePropagation()
		}
		this.setmodalModalDeleteShow(index || 0)
	}

	render(){
		return(
			<div>
				<div className="container-fluid dogListContainer">
					{this.props.dogs.map((dog,index) =>{return (
						<div key={index} className="row">
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div onClick={()=>{this.props.selectADog(dog._id)}} className="outlineNone cursorPointer">
									<div className="container-fluid">
										<div className = "row elementDogList">
											<div className="col-xs-12 col-md-8">

												<div className="col-xs-12 col-md-4">
													{CapitalLetter(dog.name)}
												</div>
												<div className="col-xs-12 col-md-4">
													Level:{dog.level}
												</div>
												<div className="col-xs-12 col-md-4">
													Points:{dog.points}
												</div>
											</div>
											<div className="col-xs-12 col-md-4">
												<div className="col-xs-12 col-md-6">
													<button 
														onClick={(event) => this.handleEdit(event,index+1)}
														className="glyphicon glyphicon-pencil outlineNone btnEditDog">
													</button>
												</div>
												<div className="col-xs-12 col-md-6">
													<button 
														onClick={(event) => this.handleDelete(event,index+1)}
														className="glyphicon glyphicon-remove outlineNone btnRemoveDog">
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-offset-0 col-sm-offset-6 col-md-offset-6 col-lg-offset-6">
							</div>
							{this.state.modalDeleteShow === index+1
								? 
								<DeleteModal 
									show={this.state.modalDeleteShow} 
									onHide={this.handleDelete}
									dialogClassName="custom-modal"
									idDog={dog._id}
									nameDog={dog.name}
									deleteDog={this.props.deleteDog}
								/>
								:
								undefined
							}
						</div>
						)
					})}
				</div>

			</div>
		)
	}
}

export default DogList