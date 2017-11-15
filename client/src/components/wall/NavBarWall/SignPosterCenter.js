import React, {Component} from 'react'


class SignPosterCenter extends Component{
	render(){
		return (
			<div className="signPostCenter containerTag translateDown cursorDefault">
				<p className="textTag textTagCenter">{this.props.currentTag.toUpperCase()}</p>
			</div>
		)
	}
}

export default SignPosterCenter