import React, {Component} from 'react'

import CapitalLetter from '../../../utilities/CapitalLetter'

class DogDetailLevelModal extends Component{
	constructor(){
		super()

		this.state={
			popularityClass: '',
			agresivityClass: '',
			socialityClass: '',
		}
	}

	setPopularityClass(popularityClass){this.setState({popularityClass})}
	setAgresivityClass(agresivityClass){this.setState({agresivityClass})}
	setSocialityClass(socialityClass){this.setState({socialityClass})}

	getPopularityClass = () =>{
		switch(this.props.dog.popularity){
			case 0: 
				this.setPopularityClass("popularity0 popularity") 
				break
			case 1: 
				this.setPopularityClass("popularity1 popularity")
				break
			case 2: 
				this.setPopularityClass("popularity2 popularity")
				break
			case 3: 
				this.setPopularityClass("popularity3 popularity")
				break
			case 4: 
				this.setPopularityClass("popularity4 popularity")
				break
			case 5: 
				this.setPopularityClass("popularity5 popularity")
		}	
	}

	getAgresivityClass = () =>{
		switch(this.props.dog.agresivity){
			case 0: 
				this.setAgresivityClass("agresivity0 agresivity") 
				break
			case 1: 
				this.setAgresivityClass("agresivity1 agresivity")
				break
			case 2: 
				this.setAgresivityClass("agresivity2 agresivity")
				break
			case 3: 
				this.setAgresivityClass("agresivity3 agresivity")
		}	
	}

	getSocialityClass = () =>{
		switch(this.props.dog.sociality){
			case 0: 
				this.setSocialityClass("sociality0 sociality") 
				break
			case 1: 
				this.setSocialityClass("sociality1 sociality")
				break
			case 2: 
				this.setSocialityClass("sociality2 sociality")
				break
			case 3: 
				this.setSocialityClass("sociality3 sociality")
				break
			case 4: 
				this.setSocialityClass("sociality4 sociality")
		}	
	}

	componentDidMount(){
		this.getPopularityClass()
		this.getAgresivityClass()
		this.getSocialityClass()
	}
	componentWillReceiveProps(nextProps){
		this.getPopularityClass(nextProps)
		this.getAgresivityClass(nextProps)
		this.getSocialityClass(nextProps)
	}

	render(){
		return(
			<div className="dogDetailLevelContainer">
				<div className="row cursorDefault">
					<div className="col-xs-12">
						<p><strong>Level: </strong>{this.props.dog.level}</p>
					</div>
				</div>
				<div className="row cursorDefault">
					<div className="col-xs-12">
						<p><strong>Points: </strong>{this.props.dog.points}</p>
					</div>
				</div>
				<div className="row cursorDefault lvlAtribute_1_Container">
					<div className="col-xs-12">
						<p className="displayInline"><strong>Popularity: </strong></p>
						<div className={this.state.popularityClass}></div>
					</div>
				</div>
				<div className="row cursorDefault lvlAtribute_2_Container">
					<div className="col-xs-12">
						<p className="displayInline"><strong>Aggressivity: </strong></p>
						<div className={this.state.agresivityClass}></div>
					</div>
				</div>
				<div className="row cursorDefault lvlAtribute_3_Container">
					<div className="col-xs-12">
						<p className="displayInline"><strong>Sociality: </strong></p>
						<div className={this.state.socialityClass}></div>
					</div>
				</div>
			</div>
		)
	}
}

export default DogDetailLevelModal