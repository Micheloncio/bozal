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

	handlerShowHideComment = () => {
    	if(this.state.showComments)
      		this.setState({'showComments': false})
    	else
      		this.setState({'showComments': true})
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

	componentWillMount(){
		this.itsLiked(this.props.history.likes, this.props.myDogProfile.id)
		this.itsDisliked(this.props.history.dislikes, this.props.myDogProfile.id)
	}
	componentWillReceiveProps(nextPops){
		this.setState({'showComments': false})
		this.itsLiked(nextPops.history.likes, nextPops.myDogProfile.id)
		this.itsDisliked(nextPops.history.dislikes, nextPops.myDogProfile.id)
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
									handlerShowHideComment = {this.handlerShowHideComment}
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

									nameDog = {this.props.history.nameDog}
									imgDog = {this.props.history.photo}
								/>
								<Commentaries
									myDogProfile = {this.props.myDogProfile}
									comments = {this.props.history.comments}
									idHistory = {this.props.history._id}
									show = {this.state.showComments}
									handlerShowHideComment = {this.handlerShowHideComment}
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