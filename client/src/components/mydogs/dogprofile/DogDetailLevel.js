import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

import CapitalLetter from '../../../utilities/CapitalLetter'

class DogDetailLevel extends Component{
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
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p data-tip data-for='level'>
							<strong>Level: </strong>{this.props.dog.level}
						</p>
						<ReactTooltip  id='level' className={this.props.config.tooltipCss} place="top" effect="solid">
							<p>Increase your level to have more actions</p>
							<p>and customize your dog profile,</p> 
							<p>get points to level up</p>
						</ReactTooltip>
					</div>
				</div>
				<div className="row cursorDefault">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p data-tip data-for='points'>
							<strong>Points: </strong>{this.props.dog.points}
						</p>
						<ReactTooltip  id='points' className={this.props.config.tooltipCss} place="top" effect="solid">
							<p>You can get points in many ways, discover them!</p>
						</ReactTooltip>
					</div>
				</div>
				<div className="row cursorDefault lvlAtribute_1_Container">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p data-tip data-for='popularity' className="displayInline">
							<strong>Popularity: </strong>
						</p>
						<div className={this.state.popularityClass}></div>
						<ReactTooltip  id='popularity' className={this.props.config.tooltipCss} place="top" effect="solid">
							<p>Get likes and win in <em>Day's photo</em></p>
							<p>to increase your <strong>popularity</strong></p>
						</ReactTooltip>
					</div>
				</div>
				<div className="row cursorDefault lvlAtribute_2_Container">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p data-tip data-for='agresivity' className="displayInline">
							<strong>Aggressivity: </strong>
						</p>
						<div className={this.state.agresivityClass}></div>
						<ReactTooltip  id='agresivity' className={this.props.config.tooltipCss} place="top" effect="solid">
							<p>If you get dislike's without reasons it will increase your <strong>aggressivity</strong>,</p>
							<p>when you have the aggressivity at the highest level:</p>
							<p>a la puta calle...</p>
						</ReactTooltip>
					</div>
				</div>
				<div className="row cursorDefault lvlAtribute_3_Container">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p data-tip data-for='sociality' className="displayInline">
							<strong>Sociality: </strong>
						</p>
						<div className={this.state.socialityClass}></div>
						<ReactTooltip  id='sociality' className={this.props.config.tooltipCss} place="top" effect="solid">
							<p>Comment the photos of other dogs and make friends</p>
							<p>to increase your <strong>sociality</strong></p>
						</ReactTooltip>
					</div>
				</div>
			</div>
		)
	}
}

export default DogDetailLevel