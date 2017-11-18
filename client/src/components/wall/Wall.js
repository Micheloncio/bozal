import React, {Component} from 'react'

import '../../styles/wall/Wall.css'

import NavBarWall from './NavBarWall/NavBarWall'
import History from './History'

import HistoriesApi from '../../services/HistoriesApi'

class Wall extends Component{
	constructor(props){
		super(props)

		this.state = {
			initialTag:'home',
			myDogProfile:{
				id:'5a0c8cbadb862d35284ca890',
				name: 'Lua'
				},
			histories:[],
			background: 'backgroundWall backgroundHome'
		}
	}

	setBackground = (background) =>{
		this.setState({background})
	}
	setHistories = (histories) =>{
		this.setState({histories})
	}

	selectBackground(currentTag){
		switch(currentTag){
			case 'home':
				this.setBackground('backgroundWall backgroundHome')
				break
			case 'beach':
				this.setBackground('backgroundWall backgroundBeach')
				break
			case 'mountain':
				this.setBackground('backgroundWall backgroundMountain')
				break
			default:
				this.setBackground('backgroundWall backgroundHome')
				break
		}		
	}

	loadHistoriesByTagFromApi = (tag) => {
		HistoriesApi.getLast24HoursHistoriesByTag(tag)
			.then(histories =>{
				this.setHistories(histories || [])
			})
			.catch()
	}

	changeWallBy(currentTag){
		this.selectBackground(currentTag)
		this.loadHistoriesByTagFromApi(currentTag)
	}
	componentDidMount(){
		this.loadHistoriesByTagFromApi(this.state.initialTag)
	}

	handleApplyNewCurrentTag =(newCurrentTag)=>{
		this.changeWallBy(newCurrentTag)
	}

	render(){
		return (
			<div className={this.state.background}>

				<div className="container-fluid containerSticky">
					<div className="row">
						<div className="col-xs-12 col-md-12">
							
							<NavBarWall 
								handleApplyNewCurrentTag = {this.handleApplyNewCurrentTag}
								myDogProfile = {this.state.myDogProfile}
							/>

						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						{this.state.histories.map((history,index) =>  ( 
									<div className="col-xs-12 col-sm-6 col-md-6" key={index}>
										
										<History 
											history = {history}
											myDogProfile = {this.state.myDogProfile}
										/>

									</div>
								))
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Wall