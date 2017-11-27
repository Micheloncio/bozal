import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'
import swal from 'sweetalert2'

import Points from '../../../Points'

import NewDayPhoto from './NewDayPhoto'

class AddDayPhoto extends Component{
	constructor(){
		super()

		this.state={
			modalShow: false
		}
	}

	setmodalShow = (modalShow) => {
		this.setState({modalShow})
	}

	handleShowNewDayPhoto = () => {
		if(this.props.myDogProfile._id)
			if(Points.checkHasPoints(this.props.config.dogSelected.points, Points.addDayPhoto)){
				this.setmodalShow(true)
			}else{
				swal('Oops...', `You don't have enough points, you need ${-Points.addDayPhoto} points to add a new days photo`, 'error')
			}
	}
	handleHideNewDayPhoto = ()=>{
		this.setmodalShow(false)
	}

	render(){
		return (
			<div>
				<div 
					data-tip data-for='AddDayPhoto'
					className="signPostCenter containerAddDog translateDown cursorPointer"
					onClick={this.handleShowNewDayPhoto}>
						<p className="textTag textTagCenter">+PHOTO</p>
				</div>
				<ReactTooltip id='AddDayPhoto' className={this.props.config.tooltipCss} place="top" effect="float">
					{"Add days photo " + Points.addDayPhoto + " points"}
				</ReactTooltip>

				{this.state.modalShow 
					? 
					<NewDayPhoto 
						show={this.state.modalShow} 
						onHide={this.handleHideNewDayPhoto}
						dialogClassName="custom-modal"
						config={this.props.config}
						myDogProfile = {this.props.myDogProfile}
						setPoints={this.props.setPoints}/>
					:
					undefined
				}
			</div>
		)
	}
}

export default AddDayPhoto