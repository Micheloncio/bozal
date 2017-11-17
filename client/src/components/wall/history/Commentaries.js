import React, {Component} from 'react'

import HistoriesApi from '../../../services/HistoriesApi'

class Commentaries extends Component{
	constructor(){
		super()

		this.state={
			textbox: "",
			comments:[]
		}
	}
	
	setTextBox(text){
		this.setState({
			textbox:text
		})
	}

	changeTextbox = (e) => {
		this.setTextBox(e.target.value)	
	}

	handlerAddComment = (e) => {
		e.preventDefault()
		this.addComment()
	}

	addComment(){
		HistoriesApi.addComment(this.props.idHistory, this.state.textbox, this.props.myDogProfile.id)
		this.updateComments(this.props.idHistory, this.state.textbox, this.props.myDogProfile.name)
		this.setTextBox('')
	}

	onKeyPressed = (e) => {
		if(e.key == 'Enter')
			{
				this.addComment()
			}
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

	componentDidMount(){
		this.setComments(this.props.comments)
	}
	componentWillReceiveProps(nextProps){
		this.setComments(nextProps.comments)
	}

	setComments = (comments) => {
		this.setState({comments})
	}

	render(){
		return (
			<div className={this.props.show ? 'showComments': 'hideComments'}>
				<div className="container-fluid">
					<div className="row">
						<div className="verticalScroll">
							{this.state.comments.map((comment,index) =><p key={index}>
									<strong>
										{comment.dog.name}
									</strong> 
										: {comment.comment}
									</p>
							)}
						</div>
					</div>
					
					<div className="row">
						<textarea className="outlineNone areatext_Comentaries" 
							placeholder="Write here your comment..."
							onChange={this.changeTextbox}
							onKeyPress={this.onKeyPressed}
							value={this.state.textbox}
						/>
					</div>	
				</div>
			</div>
		)
	}
}

export default Commentaries