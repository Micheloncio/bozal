import React, {Component} from 'react'

class Photo extends Component{
	render(){
		return (
			<div>
				<div>
					<button className="borderButtonHistory blackFrame">
					</button>
				</div>
				<div className="imgDogPosition">
					<img src={this.props.imgDog} width="256px" height="256px"/>
				</div>
			</div>
		)
	}
}

export default Photo