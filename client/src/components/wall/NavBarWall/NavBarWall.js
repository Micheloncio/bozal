import React, {Component} from 'react'

import '../../../styles/wall/NavBarWall.css'

import SignPosterLeft from './SignPosterLeft'
import SignPosterCenter from './SignPosterCenter'
import SignPosterRight from './SignPosterRight'
import AddHistory from './AddHistory'

import TagsApi from '../../../services/TagsApi'


class NavBarWall extends Component{
	constructor(){
		super()

		this.state={
			currentTag:'',
			nextTag:'',
			beforeTag:'',
			allTags:[]
		}
	}
	
	setAllTags = (allTags) => {
		this.setState({allTags})
	}
	setCurrentTag = (currentTag) => {
		this.setState({currentTag})
	}
	setNextTag = (nextTag) => {
		this.setState({nextTag})
	}
	setBeforeTag = (beforeTag) => {
		this.setState({beforeTag})
	}

	loadTagsFromApi = () => {
		TagsApi.listTags()
			.then(tags =>{
				const allTags = tags.map(tag => tag.name)
				this.setAllTags(allTags)
				this.loadNewCurrentTags(allTags)
			})
			.catch()
	}
	
	loadNewCurrentTags = (allTags,newCurrentTag) => {
		if(!newCurrentTag){
			this.changeCurrentTags(allTags[0],allTags[1],allTags[allTags.length-1])
		}else{
			for(let i=0;i<allTags.length; i++){
				if(allTags[i]===newCurrentTag){
					if(i!==allTags.length-1 && i!==0){//if the newCurrentTag isn't the first or the last in array, then:
						this.changeCurrentTags(allTags[i],allTags[i+1],allTags[i-1])	
					}else if(i===0){
						this.changeCurrentTags(allTags[i],allTags[i+1],allTags[allTags.length-1])
					}else if(i===allTags.length-1){
						this.changeCurrentTags(allTags[i],allTags[0],allTags[i-1])
					}
				}
			}
		}
	}

	changeCurrentTags = (currentTag, nextTag, beforeTag) => {
		this.setCurrentTag(currentTag)
		this.setNextTag(nextTag)
		this.setBeforeTag(beforeTag)
	}

	componentDidMount(){this.loadTagsFromApi()}

	handleLoadNewCurrentTags = (newCurrentTag) =>{
		this.loadNewCurrentTags(this.state.allTags, newCurrentTag)
		this.props.handleApplyNewCurrentTag(newCurrentTag)
	}

	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-4 col-md-2">
						<SignPosterLeft 
							tag = {this.state.beforeTag}
							handleLoadNewCurrentTags = {this.handleLoadNewCurrentTags}
						/>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-2 col-sm-offset-0 col-md-offset-3">
						<div className="row">
							<SignPosterCenter 
								currentTag = {this.state.currentTag}
							/>
						</div>
						<div className="row">
							<AddHistory
								config={this.props.config}
								tags = {this.state.allTags}
								myDogProfile = {this.props.myDogProfile}
								setPoints={this.props.setPoints}
								handleLoadNewCurrentTags = {this.handleLoadNewCurrentTags}/>
						</div>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-2 col-sm-offset-0 col-md-offset-3">
						<SignPosterRight 
							tag = {this.state.nextTag}
							handleLoadNewCurrentTags = {this.handleLoadNewCurrentTags}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default NavBarWall