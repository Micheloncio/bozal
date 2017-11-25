import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'
import swal from 'sweetalert2'

import HistoriesApi from '../../../services/HistoriesApi'

import Points from '../../../Points'

class Dislike extends Component{
	constructor(props){
		super(props)

		this.state={
			disliked: false
		}
	}

	setDisliked = (disliked) =>{
		this.setState({disliked})
	}

	componentWillMount(){
		this.setDisliked(this.props.disliked)
	}
	componentWillReceiveProps(nextProps){
		this.setDisliked(nextProps.disliked)
	}
	checkHasPoints(points){
		if((this.props.config.dogSelected.points + points)>=0)
			return true

		return false
	}
	deleteOrAddLike = (disliked) =>{
		if(disliked){
			HistoriesApi.deleteDislike(this.props.idHistory, this.props.myIdDog)
			this.props.setPoints(-Points.dislike)
			this.setDisliked(!disliked)
			this.props.setDisliked(!disliked)
		}else{
			if(this.checkHasPoints(Points.dislike)){
				HistoriesApi.addDislike(this.props.idHistory, this.props.myIdDog)
				this.props.setPoints(Points.dislike)
				this.setDisliked(!disliked)
				this.props.setDisliked(!disliked)
			}else{
				swal('Oops...', "You don't have enough points", 'error')
			}
		}
	}
	
	handleDislike(disliked){
		if(this.props.myIdDog)
			this.deleteOrAddLike(disliked)
	}
	render(){
		return (
			<div>
				<button 
					data-tip={"Add dislike " + Points.dislike + " points"}
					className={this.state.disliked ? 'disliked outlineNone borderButtonHistory marginButtonHistory buttonResize' : 'dislike outlineNone borderButtonHistory marginButtonHistory buttonResize'}
					onClick={() =>{this.handleDislike(this.state.disliked)}}
					>
				</button>
				<ReactTooltip className={this.props.config.tooltipCss} place="top" effect="solid"/>
			</div>
		)
	}
}

export default Dislike