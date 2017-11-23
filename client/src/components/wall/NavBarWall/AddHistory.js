import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

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

	handleShowHideNewHistory = () => {
		if(this.props.myDogProfile._id)
			this.setmodalShow(!this.state.modalShow)
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
					{"Share a dog's photo +" + Points.addHistory + " points"}
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