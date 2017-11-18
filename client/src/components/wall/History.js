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
			showComments: false,
			liked: false,
			disliked: false
		}
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
    	this.setShowComments(!this.state.showComments)
	}

	checkLikeAndDislike(likes,dislikes,myIdDog){
		this.itsLiked(likes, myIdDog)
		this.itsDisliked(dislikes, myIdDog)
	}
	componentWillMount(){
		this.checkLikeAndDislike(this.props.history.likes, this.props.history.dislikes, this.props.myDogProfile.id)
	}
	componentWillReceiveProps(nextPops){
		this.setShowComments(false)
		this.checkLikeAndDislike(nextPops.history.likes, nextPops.history.dislikes, nextPops.myDogProfile.id)
	}
	

	render(){
		return (
				<div className="marginHistory">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-2 col-md-1 col-lg-1 col-xs-offset-0 col-md-offset-1 col-lg-offset-3">
								<Like
									idHistory = {this.props.history._id}
									myIdDog = {this.props.myDogProfile.id}
									likes = {this.props.history.likes}
									nameDog = {this.props.history.nameDog}
									setLiked = {this.setLiked} 
									liked = {this.state.liked}
								/>
								<BalloonCommentaries
									handleShowHideComment = {this.handleShowHideComment}
									commentsNumber = {this.props.history.comments.length}
								/>
								<Dislike
									idHistory = {this.props.history._id}
									myIdDog = {this.props.myDogProfile.id}
									dislikes = {this.props.history.dislikes}
									nameDog = {this.props.history.nameDog}
									setDisliked = {this.setDisliked} 
									disliked = {this.state.disliked}
								/>
							</div>
							<div className="col-xs-10 col-md-8 col-lg-6 col-xs-offset-0 col-md-offset-1 col-lg-offset-1">
								<FramedPicture 
									description = {this.props.history.description}
									imgDog = {this.props.history.photo}
								/>
								<Commentaries
									myDogProfile = {this.props.myDogProfile}
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