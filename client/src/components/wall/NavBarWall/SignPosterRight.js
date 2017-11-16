import React, {Component} from 'react'


class SignPosterRight extends Component{
	render(){
		return (
			<div className="containerTag signPostRight rotateLeft cursorPointer" 
			onClick={this.props.handlerNextTag}
			>
				<p className="textTag textTagRight">
					{this.props.tag.toUpperCase()}
				</p>
			</div>
		)
	}
}

export default SignPosterRight