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

	componentWillMount(){
		this.setLiked(this.props.liked)
	}
	componentWillReceiveProps(nextPops){
		this.setLiked(nextPops.liked)
	}

	deleteOrAddLike = (liked) =>{
		if(liked)
			HistoriesApi.deleteLike(this.props.idHistory, this.props.myIdDog)
		else
			HistoriesApi.addLike(this.props.idHistory, this.props.myIdDog)

		this.setLiked(!liked)
		this.props.setLiked(!liked)
	}

	handleLike = (liked) =>{
		if(this.props.myIdDog)
			this.deleteOrAddLike(liked)
	}

	render(){
		return (
			<button className={this.state.liked ? 'like outlineNone borderButtonHistory marginButtonHistory toBeat' : 'like outlineNone borderButtonHistory marginButtonHistory liked'}
				onClick={() =>{this.handleLike(this.state.liked)}}
				>
			</button>
		)
	}
}

export default Like