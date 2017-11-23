import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import '../../../styles/Switch.css'

class HelpSwitcher extends Component {

	render(){
		return (
			<div>
				<div className="col-xs-6">
					<div className="textSwitchContainaer">
						Show help
					</div>
				</div>
				<div className="col-xs-5">
					<div className="switchContainer">
						<label className="switch">
						  	<input 
						  		type="checkbox" 
						  		defaultChecked={this.props.config.tooltipShowed}
						  		onChange={this.props.switchTooltipStatus}/>
							<span className="slider round"></span>
						</label>
					</div>
				</div>
				<div className="col-xs-offset-1">
				</div>
			</div>
		)
	}
}
export default HelpSwitcher;



