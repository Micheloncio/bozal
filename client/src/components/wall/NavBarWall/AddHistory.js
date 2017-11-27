import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'
import swal from 'sweetalert2'

import NewHistory from './NewHistory'
import Points from '../../../Points'

class AddHistory extends Component{
	constructor(){
		super()

		this.state={
			modalShow: false
		}
	}

	setmodalShow = (modalShow) => {
		this.setState({modalShow})
	}

	handleShowNewHistory = () => {
		if(this.props.myDogProfile._id){
			if(Points.checkHasPoints(this.props.config.dogSelected.points, Points.addHistory)){
				this.setmodalShow(true)
			}else{
				swal('Oops...', `You don't have enough points, you need ${-Points.addHistory} points to add a new history`, 'error')
			}
		}
	}

	handleHideNewHistory=()=>{
		this.setmodalShow(false)
	}

	render(){
		return (
			<div>
				<div data-tip data-for='AddHistory' onClick={this.handleShowNewHistory} className="addHistory containerAddHistory translateDown cursorPointer">
						<div className="container-fluid">
							<div className="row">
								<div className="col-xs-6">
									<div className="iconAddHistory glyphicon glyphicon-plus"/>
								</div>
								<div className="col-xs-6">
									<div className="iconCamHistory glyphicon glyphicon-camera" /> 
								</div>
							</div>
						</div>
				</div>
				
				<ReactTooltip id='AddHistory' className={this.props.config.tooltipCss} place="top" effect="float">
					{"Share a dog's photo " + Points.addHistory + " points"}
				</ReactTooltip>

				{this.state.modalShow 
					? 
					<NewHistory 
						show={this.state.modalShow} 
						onHide={this.handleHideNewHistory}
						dialogClassName="custom-modal"
						tags = {this.props.tags}
						setPoints={this.props.setPoints}
						myDogProfile = {this.props.myDogProfile}
						handleLoadNewCurrentTags = {this.props.handleLoadNewCurrentTags}
					/>
					:
					undefined
				}
			</div>
		)
	}
}

export default AddHistory