import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import HeaderConfig from './HeaderConfig'

class HeaderDog extends Component {
	constructor(){
		super()

		this.state={
			showConfig:false
		}
	}
	
	setShowConfig(showConfig){this.setState({showConfig})}

	handleSwitchConfigVisibility = () => {
    	this.setShowConfig(!this.state.showConfig)
	}

	render(){
		return (
			<div className="HeaderDogContainer">
				{this.props.config.anyDogSelected 
					?
					<div className="cursorPointer" onClick={this.handleSwitchConfigVisibility}>
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
					<p className="element_0_headerDog cursorDefault"><strong>No dog selected</strong></p>
				}
				{this.state.showConfig 
					?
					<HeaderConfig 
						config = {this.props.config}
						switchTooltipStatus={this.props.switchTooltipStatus}/>
					:
					undefined
				}
			</div>
		)
	}
}

export default HeaderDog;