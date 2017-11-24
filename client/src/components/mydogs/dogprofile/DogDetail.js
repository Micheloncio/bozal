import React, {Component} from 'react'

import DogDetailInfo from './DogDetailInfo'
import DogDetailLevel from './DogDetailLevel'

class DogDetail extends Component{

	render(){
		return(
			<div className="container-fluid">
				<DogDetailInfo
					config={this.props.config} 
					dog={this.props.dog}/>
				<DogDetailLevel
					config={this.props.config} 
					dog={this.props.dog}/>
			</div>
		)
	}
}

export default DogDetail