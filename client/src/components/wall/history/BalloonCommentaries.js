import React, {Component} from 'react'

class BalloonCommentaries extends Component{
	render(){
		return (
			<button className="balloonCommentaries outlineNone borderButtonHistory
				 marginButtonHistory buttonResize"
				onClick={this.props.handleShowHideComment}
			>
			{this.props.commentsNumber}
			</button>
		)
	}
}

export default BalloonCommentaries