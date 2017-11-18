import React, {Component} from 'react'

class getimage extends Component{
	render(){
		return (
			<div>
				<input type="file" accept="image/*" onChange={this.getImage} />
			</div>
		)
	}
}

export default getimage