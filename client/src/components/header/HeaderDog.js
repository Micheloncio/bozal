import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import HeaderConfig from './headerconfig/HeaderConfig'
import OutsideClick from '../commons/OutsideClick'
import CapitalLetter from '../../utilities/CapitalLetter'

class HeaderDog extends Component {
	constructor(){
		super()

		this.state={
			showConfig:false
		}
	}
	
	setShowConfig(showConfig){this.setState({showConfig})}

	handleHiddenConfig = () =>{
		this.setShowConfig(false)
	}

	handleSwitchConfigVisibility = () => {
    	this.setShowConfig(!this.state.showConfig)
	}

	render(){
		return (
			<OutsideClick 
				handleSwitchConfigVisibility={this.handleHiddenConfig}>
				<div 
					data-tip 
					data-for='headerDog' 
					data-delay-show='300'
					className="HeaderDogContainer cursorPointer" 
					onClick={this.handleSwitchConfigVisibility}
				>
					{this.props.config.anyDogSelected 
						?
						<div>
							<p className="element_1_headerDog">
								<strong>{CapitalLetter(this.props.config.dogSelected.name)}</strong>
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
				<ReactTooltip id='headerDog' className={this.props.config.tooltipCss} place="bottom" effect="solid" delayShow={300}>
					Click for see options
				</ReactTooltip>
				{this.state.showConfig 
						?
						<HeaderConfig 
							config = {this.props.config}
							setDogSelected={this.props.setDogSelected}
							setAnyDogSelected={this.props.setAnyDogSelected}
							switchTooltipStatus={this.props.switchTooltipStatus}/>
						:
						undefined
					}
			</OutsideClick>
		)
	}
}

export default HeaderDog;