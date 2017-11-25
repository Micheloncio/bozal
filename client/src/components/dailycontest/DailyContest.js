import React,{Component} from 'react'

import NavBarDaily from './NavBarDaily/NavBarDaily'

class DailyContest extends Component{
	render(){
		return (
			<div>
				<NavBarDaily
					config={this.props.config}
					myDogProfile={this.props.config.dogSelected}
	          		setPoints={this.props.setPoints}/>
			</div>
		)
	}
}

export default DailyContest