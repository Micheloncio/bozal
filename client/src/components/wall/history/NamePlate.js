import React, {Component} from 'react'

class NamePlate extends Component{
	render(){
		return (
			<div className="namePlate namePlatePosition">
				<p className="namePlateText cursorDefault">{this.props.description ? this.props.description.toUpperCase() : undefined}</p>
			</div>
		)
	}
}

export default NamePlate