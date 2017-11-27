import React, {Component} from 'react'
import swal from 'sweetalert2'

import HistoriesApi from '../../../services/HistoriesApi'

import Points from '../../../Points'

class Commentaries extends Component{
	constructor(){
		super()

		this.state={
			textbox: "",
			comments:[],
			maxLength: 50
		}
	}
	
	setTextBox(text){
		this.setState({
			textbox:text
		})
	}
	setComments = (comments) => {
		this.setState({comments})
	}

	handleChangeTextbox = (e) => {
		this.setTextBox(e.target.value)	
	}

	componentDidMount(){
		this.setComments(this.props.comments)
	}
	componentWillReceiveProps(nextProps){
		this.setComments(nextProps.comments)
	}

	addComment(){
		HistoriesApi.addComment(this.props.idHistory, this.state.textbox, this.props.myDogProfile._id)
		this.updateComments(this.props.idHistory, this.state.textbox, this.props.myDogProfile.name)
		this.setTextBox('')
	}

	updateComments = (_id,comment, name) => {
		const comments = this.state.comments

		const newComment = {
			_id,
			comment,
			dog:{name}
		}
		
		comments.push(newComment)
		this.setComments(comments)
	}

	handleonKeyPressed = (e) => {
		if(e.key === 'Enter'){
			if(this.props.myDogProfile._id){
				if(this.state.textbox){
					if(Points.checkHasPoints(this.props.config.dogSelected.points, Points.addHistory)){
						this.addComment()
						this.props.setPoints(Points.comment)
					}else{
						swal('Oops...', `You don't have enough points, you need ${-Points.comment} points to add a comment`, 'error')
					}
				}
			}
		}
	}	

	render(){
		return(
			<div className={this.props.show ? 'showComments': 'hideComments'}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-2 col-xs-offset-10">
							<button 
								className="borderButtonHistory btnX buttonResize outlineNone"
								onClick={this.props.handleShowHideComment}
								>
								x
							</button>
						</div>
					</div>
					<div className="row">
						<div className="verticalScroll">
							{this.state.comments.map((comment,index) =><div key={index}>
									<label className="backgroundComentarie">
										<strong>
											{comment.dog 
												? 
												comment.dog.name
												:
												"Deleted Dog"}
										</strong> 
										: {comment.comment}
										&nbsp;
									</label>
								</div>
							)}
						</div>
					</div>
					
					<div className="row">
						<textarea
							maxLength={this.state.maxLength}
							value={this.state.textbox}
							onChange={this.handleChangeTextbox}
							onKeyPress={this.handleonKeyPressed}
							placeholder="Write here your comment..."	
							className="outlineNone areatext_Comentaries"						
						/>
					</div>	
				</div>
			</div>
		)
	}
}

export default Commentaries