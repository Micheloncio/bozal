import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'


class HeaderDog extends Component {

	render(){
		return (
			<div className="HeaderDogContainer">
			{this.props.config.anyDogSelected 
				?
				<div>
					<p className="element_1_headerDog">
						<strong>{this.props.config.dogSelected.name}</strong>
					</p>
					<p className="element_2_headerDog">
						<strong>
							Lvl: {this.props.config.dogSelected.level}{" "}{" "}{" "}
							Points: {this.props.config.dogSelected.points}
						</strong>
					</p>
				</div>
				:
				<p className="element_0_headerDog"><strong>No dog selected</strong></p>
			}
			
			</div>
		)
	}
}

export default HeaderDog;