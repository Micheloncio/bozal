import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class SelectDog extends Component {

	render(){
		return (
			<div>
				<div className="col-xs-6">
					<div className="textSwitchContainaer">
						Dog
					</div>
				</div>
				<div className="col-xs-5">
					<div className="switchContainer">
						
					</div>
				</div>
				<div className="col-xs-offset-1">
				</div>
			</div>
		)
	}
}
export default SelectDog;