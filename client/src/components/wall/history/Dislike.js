import React, {Component} from 'react'

import HistoriesApi from '../../../services/HistoriesApi'

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

	itsDisliked = (dislikes, myIdDog) =>{
		const itsDisliked = dislikes.some(dislike=> dislike === myIdDog )
		if(itsDisliked)
			this.setDisliked(true)
		else
			this.setDisliked(false)
	}

	componentWillMount(){
		this.itsDisliked(this.props.dislikes, this.props.myIdDog)
	}
	componentWillReceiveProps(nextPops){
		this.itsDisliked(nextPops.dislikes, nextPops.myIdDog)
	}

	handlerDislike = (disliked) =>{
		if(disliked){
			HistoriesApi.deleteDislike(this.props.idHistory, this.props.myIdDog)
		}else{
			HistoriesApi.addDislike(this.props.idHistory, this.props.myIdDog)
		}
		this.setDisliked(!disliked)
	}
	render(){
		return (
			<button className={this.state.disliked ? 'disliked outlineNone borderButtonHistory marginButtonHistory buttonResize' : 'dislike outlineNone borderButtonHistory marginButtonHistory buttonResize'}
				onClick={() =>{this.handlerDislike(this.state.disliked)}}
				>
			</button>
		)
	}
}

export default Dislike