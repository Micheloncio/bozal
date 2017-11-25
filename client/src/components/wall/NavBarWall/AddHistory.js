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

	checkHasPoints(points){
		if((this.props.config.dogSelected.points + points)>=0)
			return true

		return false
	}

	handleShowHideNewHistory = () => {
		if(this.props.myDogProfile._id){
			if(this.checkHasPoints(Points.addHistory)){
				this.setmodalShow(!this.state.modalShow)
			}else{
				swal('Oops...', "You don't have enough points", 'error')
			}
		}
	}	

	render(){
		return (
			<div>
				<div data-tip data-for='AddHistory' data-delay-show='300' onClick={this.handleShowHideNewHistory} className="addHistory containerAddHistory translateDown cursorPointer">
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
				
				<ReactTooltip id='AddHistory' className={this.props.config.tooltipCss} place="top" effect="float" delayShow={300}>
					{"Share a dog's photo " + Points.addHistory + " points"}
				</ReactTooltip>

				{this.state.modalShow 
					? 
					<NewHistory 
						show={this.state.modalShow} 
						onHide={this.handleShowHideNewHistory}
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