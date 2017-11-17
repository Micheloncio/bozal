import React, {Component} from 'react'

import HistoriesApi from '../../../services/HistoriesApi'

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

	itsLiked = (likes, myIdDog) =>{
		const itsLiked = likes.some(like=> like === myIdDog )
		if(itsLiked)
			this.setLiked(true)
		else
			this.setLiked(false)
	}

	componentWillMount(){
		this.itsLiked(this.props.likes, this.props.myIdDog)
	}
	componentWillReceiveProps(nextPops){
		this.itsLiked(nextPops.likes, nextPops.myIdDog)
	}

	handlerLike = (liked) =>{
		if(liked){
			HistoriesApi.deleteLike(this.props.idHistory, this.props.myIdDog)
		}else{
			HistoriesApi.addLike(this.props.idHistory, this.props.myIdDog)
		}
		this.setLiked(!liked)
	}

	render(){
		return (
			<button className={this.state.liked ? 'like outlineNone borderButtonHistory marginButtonHistory toBeat' : 'like outlineNone borderButtonHistory marginButtonHistory liked'}
				onClick={() =>{this.handlerLike(this.state.liked)}}
				>
			</button>
		)
	}
}

export default Like