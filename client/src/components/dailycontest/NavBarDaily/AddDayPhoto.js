import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

import Points from '../../../Points'

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

	handleShowHideNewDayPhoto = () => {
		if(this.props.myDogProfile._id)
			this.setmodalShow(!this.state.modalShow)
	}

	render(){
		return (
			<div>
				<div 
					data-tip data-for='AddDayPhoto'
					className="signPostCenter containerAddDog translateDown cursorPointer"
					onClick={this.handleShowHideNewDayPhoto}>
						<p className="textTag textTagCenter">+PHOTO</p>
				</div>
				<ReactTooltip id='AddDayPhoto' className={this.props.config.tooltipCss} place="top" effect="float" delayShow={300}>
					{"Add days photo " + Points.addDayPhoto + " points"}
				</ReactTooltip>

				{this.state.modalShow 
					? 
					<p>Aqui va el componente newDayPhoto</p>
					:
					undefined
				}
			</div>
		)
	}
}

export default AddDayPhoto