import React, {Component} from 'react'


class SignPosterLeft extends Component{
	render(){
		return (
			<div className="containerTag signPostLeft rotateRight cursorPointer" 
			onClick={this.props.handlerAfterTag}
			>
				<p className="textTag textTagLeft">
					{this.props.tag.toUpperCase()}
				</p>
			</div>
		)
	}
}

export default SignPosterLeft