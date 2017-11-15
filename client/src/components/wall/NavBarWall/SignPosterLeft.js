import React, {Component} from 'react'


class SignPosterLeft extends Component{
	render(){
		return (
			<div className="containerTag signPostLeft rotateRight cursorPointer">
				<p className="textTag textTagLeft" onClick={this.props.handlerAfterTag}>
					{this.props.tag.toUpperCase()}
				</p>
			</div>
		)
	}
}

export default SignPosterLeft