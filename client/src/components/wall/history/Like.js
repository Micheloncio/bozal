import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

import HistoriesApi from '../../../services/HistoriesApi'
import Points from '../../../Points'

class Like extends Component{
	constructor(props){
		super(props)

		this.state={
			liked: false
		}
	}

	setLiked = (liked) =>{
		this.setState({liked})
	}

	componentWillMount(){
		this.setLiked(this.props.liked)
	}
	componentWillReceiveProps(nextPops){
		this.setLiked(nextPops.liked)
	}

	deleteOrAddLike = (liked) =>{
		if(liked){
			HistoriesApi.deleteLike(this.props.idHistory, this.props.myIdDog)
			this.props.setPoints(-Points.like)
		}else{
			HistoriesApi.addLike(this.props.idHistory, this.props.myIdDog)
			this.props.setPoints(Points.like)
		}

		this.setLiked(!liked)
		this.props.setLiked(!liked)
	}

	handleLike = (liked) =>{
		if(this.props.myIdDog)
			this.deleteOrAddLike(liked)
	}

	render(){
		return (
			<div>
				<button 
					data-tip={"Like +" + Points.like + " points"}
					className={this.state.liked ? 'like outlineNone borderButtonHistory marginButtonHistory toBeat' : 'like outlineNone borderButtonHistory marginButtonHistory liked'}
					onClick={() =>{this.handleLike(this.state.liked)}}
					>
				</button>
				<ReactTooltip className="tooltip" place="top" effect="solid"/>
			</div>
			
		)
	}
}

export default Like