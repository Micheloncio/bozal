import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'


class HeaderDog extends Component {

	render(){
		return (
			<div className="HeaderDogContainer">
			{this.props.config.anyDogSelected 
				?
				<div>
					<p><strong>{this.props.config.dogSelected.name}</strong></p>
					<p className="element_2_headerDog">
						<strong>Lvl: {this.props.config.dogSelected.level}</strong>
					</p>
				</div>
				:
				<strong>No dog selected</strong>	
			}
			
			</div>
		)
	}
}

export default HeaderDog;