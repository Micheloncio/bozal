import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

import Points from '../../../Points'

class BalloonCommentaries extends Component{
	render(){
		return (
			<div>
				<button 
					data-tip={"Add comment " + Points.comment + " points"}
					className="balloonCommentaries outlineNone borderButtonHistory marginButtonHistory buttonResize"
					onClick={this.props.handleShowHideComment}
				>
				{this.props.commentsNumber}
				</button>
				<ReactTooltip className={this.props.config.tooltipCss} place="top" effect="solid"/>
			</div>
		)
	}
}

export default BalloonCommentaries