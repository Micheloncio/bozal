import React, {Component} from 'react'

import '../../styles/wall/History.css'

import Like from './history/Like'
import BalloonCommentaries from './history/BalloonCommentaries'
import Dislike from './history/Dislike'
import FramedPicture from './history/FramedPicture'
import Commentaries from './history/Commentaries'

class History extends Component{

	constructor(){
		super()

		this.state={
			idHistory:'',
			showComments: false,
			liked: false,
			disliked: false,
			gray:true
		}
	}

	setIdHistory = (idHistory) =>{
		this.setState({idHistory})
	}
	setShowComments = (showComments) =>{
		this.setState({showComments})
	}
	setLiked = (liked) =>{
		this.setState({liked})
	}
	setDisliked = (disliked) =>{
		this.setState({disliked})
	}
	setGray = (gray) =>{
		this.setState({gray})
	}

	itsLiked = (likes, myIdDog) =>{
		const itsLiked = likes.some(like=> like === myIdDog )
		if(itsLiked)
			this.setLiked(true)
		else
			this.setLiked(false)
	}
	itsDisliked = (dislikes, myIdDog) =>{
		const itsDisliked = dislikes.some(dislike=> dislike === myIdDog )
		if(itsDisliked)
			this.setDisliked(true)
		else
			this.setDisliked(false)
	}

	handleShowHideComment = () => {
		if(this.props.myDogProfile._id)
    		this.setShowComments(!this.state.showComments)
	}
	handleSetGray = (bool) =>{
		this.setGray(bool)
	}

	checkLikeAndDislike(likes,dislikes,myIdDog){
		this.itsLiked(likes, myIdDog)
		this.itsDisliked(dislikes, myIdDog)
	}
	checkIfItsSameHistory(newId){
		if(this.state.idHistory === newId){
			return true
		}
		return false
	}

	componentDidMount(){
		this.setIdHistory(this.props.history._id)
	}
	componentWillMount(){
		this.checkLikeAndDislike(this.props.history.likes, this.props.history.dislikes, this.props.myDogProfile._id)
	}
	componentWillReceiveProps(nextProps){
		if(!this.checkIfItsSameHistory(nextProps.history._id)){
			this.setShowComments(false)
			this.setGray(true)
			this.checkLikeAndDislike(nextProps.history.likes, nextProps.history.dislikes, nextProps.myDogProfile._id)
			this.setIdHistory(nextProps.history._id)
		}
	}
	

	render(){
		return (
				<div className="marginHistory">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-2 col-md-1 col-lg-1 col-xs-offset-0 col-md-offset-1 col-lg-offset-3">
								<Like
									config={this.props.config}
									idHistory = {this.props.history._id}
									setPoints={this.props.setPoints}
									myIdDog = {this.props.myDogProfile._id}
									likes = {this.props.history.likes}
									nameDog = {this.props.history.nameDog}
									setLiked = {this.setLiked} 
									liked = {this.state.liked}
								/>
								<BalloonCommentaries
									config={this.props.config}
									handleShowHideComment = {this.handleShowHideComment}
									commentsNumber = {this.props.history.comments.length}
								/>
								<Dislike
									config={this.props.config}
									idHistory = {this.props.history._id}
									setPoints={this.props.setPoints}
									myIdDog = {this.props.myDogProfile._id}
									dislikes = {this.props.history.dislikes}
									nameDog = {this.props.history.nameDog}
									setDisliked = {this.setDisliked} 
									disliked = {this.state.disliked}
								/>
							</div>
							<div className="col-xs-10 col-md-8 col-lg-6 col-xs-offset-0 col-md-offset-1 col-lg-offset-1">
								<FramedPicture 
									config={this.props.config}
									idHistory = {this.props.history._id}
									idDog = {this.props.history.idDog}
									setPoints={this.props.setPoints}
									myDogProfile = {this.props.myDogProfile}
									description = {this.props.history.description}
									imgDog = {this.props.history.photo}
									handleSetGray = {this.handleSetGray}
									gray = {this.state.gray}
								/>
								<Commentaries
									myDogProfile = {this.props.myDogProfile}
									setPoints={this.props.setPoints}
									comments = {this.props.history.comments}
									idHistory = {this.props.history._id}
									show = {this.state.showComments}
									handleShowHideComment = {this.handleShowHideComment}
								/>
							</div>
							<div className="col-xs-offset-0 col-md-offset-1 col-lg-offset-1">
							</div>
						</div>
					</div>
				</div>
		)
	}
}

export default History