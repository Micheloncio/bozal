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

	handlerAddLike = () =>{
		HistoriesApi.addLike(this.props.idHistory, this.props.myIdDog)
		this.setLiked(true)
	}

	componentDidMount(){
		this.itsLiked(this.props.likes, this.props.myIdDog)
	}
	componentWillReceiveProps(){
		this.itsLiked(this.props.likes, this.props.myIdDog)
	}

	render(){
		return (
			<button className={this.state.liked ? 'like outlineNone borderButtonHistory marginButtonHistory' : 'like outlineNone borderButtonHistory marginButtonHistory toBeat'}
				onClick={this.handlerAddLike}
				>
			</button>
		)
	}
}

export default Like