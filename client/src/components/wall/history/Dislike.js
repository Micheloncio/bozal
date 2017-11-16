import React, {Component} from 'react'

import HistoriesApi from '../../../services/HistoriesApi'

class Dislike extends Component{
	handlerAddDislike = () =>{
		HistoriesApi.addDislike(this.props.idHistory, this.props.myIdDog)
	}
	render(){
		return (
			<button className="dislike outlineNone borderButtonHistory 
				marginButtonHistory buttonResize"
				onClick={this.handlerAddDislike}
				>
			</button>
		)
	}
}

export default Dislike