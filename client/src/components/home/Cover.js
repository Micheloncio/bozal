import React,{Component} from 'react'

import '../../styles/Cover.css'


class Cover extends Component{
	constructor(){
		super()

		this.state={
			count: 0,
			imgClass: 'imgCover'
		}
	}
	setCount = (count) =>{
		this.setState({count})
	}
	setImgClass = (imgClass) =>{
		this.setState({imgClass})
	}
	checkCount = (count) =>{
		if(count>5){
			this.setImgClass('imgCoverB')
		}
	}

	increaseCount =() =>{
		this.setCount(this.state.count + 1)
		this.checkCount(this.state.count)
	}
	render(){
		return (
			<div className={this.state.imgClass} onClick={this.increaseCount}>
			</div>
		)
	}
}

export default Cover