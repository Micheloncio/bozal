import React, {Component} from 'react'

import '../../../styles/header/HeaderConfig.css'

import HelpSwitcher from './HelpSwitcher'
import SelectDog from './SelectDog'

class HeaderConfig extends Component {

	render(){
		return (
			<div className="HeaderConfigContainer">
				<div className="container-fluid">
					<div className="row">
						<HelpSwitcher 
							config = {this.props.config}
							switchTooltipStatus={this.props.switchTooltipStatus}/>
					</div>
					<div className="row">
						<SelectDog 
							config = {this.props.config}
							setDogSelected={this.props.setDogSelected}
							setAnyDogSelected={this.props.setAnyDogSelected}
							switchTooltipStatus={this.props.switchTooltipStatus}/>
					</div>
				</div>
			</div>
		)
	}
}

export default HeaderConfig;