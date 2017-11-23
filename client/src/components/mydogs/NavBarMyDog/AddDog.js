import React, {Component} from 'react'

import NewDog from './AddDog/NewDog'

class AddDog extends Component{
	constructor(){
		super()

		this.state={
			modalShow: false
		}
	}

	setmodalShow = (modalShow) => {
		this.setState({modalShow})
	}

	handleShowHideNewDog = () => {
		this.setmodalShow(!this.state.modalShow)
	}

	render(){
		return (
			<div>
				<div 
					className="signPostCenter containerAddDog translateDown cursorPointer"
					onClick={this.handleShowHideNewDog}>
						<p className="textTag textTagCenter">+ DOG</p>
				</div>
				{this.state.modalShow 
						? 
						<NewDog 
							show={this.state.modalShow} 
							onHide={this.handleShowHideNewDog}
							dialogClassName="custom-modal"
							idUser={this.props.idUser}
							loadDogs={this.props.loadDogs}/>
						:
						undefined
					}
			</div>
		)
	}
}

export default AddDog