
import React, {Component} from 'react'

import CapitalLetter from '../../../utilities/CapitalLetter'

import DeleteModal from './DeleteModal'

class DogList extends Component{
	constructor(){
		super()

		this.state={
			modalDeleteShow: false
		}
	}

	setmodalModalDeleteShow = (modalDeleteShow) => {
		this.setState({modalDeleteShow})
	}

	handleDelete = (e) => {
		e.stopPropagation();
		this.setmodalModalDeleteShow(!this.state.modalDeleteShow)
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
														className="glyphicon glyphicon-pencil outlineNone btnEditDog">
													</button>
												</div>
												<div className="col-xs-12 col-md-6">
													<button 
														onClick={this.handleDelete}
														className="glyphicon glyphicon-remove outlineNone btnRemoveDog">
													</button>
													{this.state.modalDeleteShow 
														? 
														<DeleteModal 
															show={this.state.modalDeleteShow} 
															onHide={this.handleDelete}
															dialogClassName="custom-modal"
															idDog={dog._id}
															nameDog={dog.name}
															deleteDogs={this.props.deleteDogs}
														/>
														:
														undefined
													}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-offset-0 col-sm-offset-6 col-md-offset-6 col-lg-offset-6">
							</div>
						</div>
						)
					})}
				</div>

			</div>
		)
	}
}

export default DogList