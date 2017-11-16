import React, {Component} from 'react'

class BalloonCommentaries extends Component{
	render(){
		return (
			<button className="balloonCommentaries outlineNone borderButtonHistory
				 marginButtonHistory buttonResize"
				onClick={this.props.handlerShowHideComment}
			>
			</button>
		)
	}
}

export default BalloonCommentaries