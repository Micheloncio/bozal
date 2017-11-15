import React, {Component} from 'react'


class SignPosterRight extends Component{
	render(){
		return (
			<div className="containerTag signPostRight rotateLeft cursorPointer">
				<p className="textTag textTagRight" onClick={this.props.handlerNextTag}>
					{this.props.tag.toUpperCase()}
				</p>
			</div>
		)
	}
}

export default SignPosterRight