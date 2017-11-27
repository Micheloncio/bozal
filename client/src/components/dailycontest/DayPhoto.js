import React,{Component} from 'react'
import ReactTooltip from 'react-tooltip'

import DayPhotoApi from '../../services/DayPhotoApi'

import Points from '../../Points'

class DayPhoto extends Component{
	constructor(){
		super()
		this.state={
			itsClicked:false
		}
	}

	setItsClicked = (itsClicked) =>{
		this.setState({itsClicked})
	}

	handleAddLike = () =>{
		if(this.props.myDogProfile._id){
			if(!this.state.itsClicked){
				this.setItsClicked(true)
				DayPhotoApi.addLike(this.props.dayPhoto._id)
				this.props.setPoints(Points.voteDayPhoto)
				this.props.loadDayPhotos()
			}
		}
	}

	componentWillReceiveProps(nextProps){
		this.setItsClicked(false)
	}

	render(){
		return (
			<div>
			<div data-tip data-for='VotePhoto' className="displayInline cursorPointer" onClick={this.handleAddLike}>
				<div className="frameDailyContest">
				</div>
				<img
					className="imageDailyContest"
					src={this.props.dayPhoto.photo}
					width="384px"
					height="384px"/>
			</div>
			<ReactTooltip id='VotePhoto' className={this.props.config.tooltipCss} place="top" effect="float">
					{"Vote this photo +" + Points.voteDayPhoto + " points"}
			</ReactTooltip>
			</div>
		)
	}
}

export default DayPhoto