import React, {Component} from 'react'

import '../../styles/wall/Wall.css'

import NavBarWall from './NavBarWall/NavBarWall'
import History from './History'

import HistoriesApi from '../../services/HistoriesApi'

class Wall extends Component{
	constructor(props){
		super(props)

		this.state = {
			myDogProfile:{
				id:'5a0c8cbadb862d35284ca890',
				name: 'Lua'
				},
			histories:[],
			tags:{
				currentTag: 'home',
				nextTag: 'beach',
				afterTag: 'mountain'
			},
			background: "backgroundWall backgroundHome"
		}
	}

	componentWillMount(){
		this.loadHistories(this.state.tags.currentTag)
	}

	loadHistories = (tag) => {
		HistoriesApi.getLast24HoursHistoriesByTag(tag)
			.then(histories =>{
				this.setState({histories})
			})
			.catch()
	}


	selectBackground(newCurrentTag){

		switch(newCurrentTag){
			case "home":
				this.setBackground("backgroundWall backgroundHome")
				break
			case "beach":
				this.setBackground("backgroundWall backgroundBeach")
				break
			case "mountain":
				this.setBackground("backgroundWall backgroundMountain")
				break
			default:
				this.setBackground("backgroundWall backgroundHome")
				break
		}		
	}

	setBackground =(background)=>{
		this.setState({background})
	}

	handlerNextTag =(e)=>{
		e.preventDefault()

		const newCurrentTag = this.state.tags.nextTag
		
		this.selectBackground(newCurrentTag)
		
		this.setState({
			tags:{
				nextTag: this.state.tags.afterTag,
				afterTag: this.state.tags.currentTag,
				currentTag: newCurrentTag			
			}
		})

		this.loadHistories(newCurrentTag)
	}

	handlerAfterTag =(e)=>{
		e.preventDefault()

		let newCurrentTag = this.state.tags.afterTag

		this.selectBackground(newCurrentTag)

		this.setState({
			tags:{
				afterTag: this.state.tags.nextTag,
				nextTag: this.state.tags.currentTag,
				currentTag: newCurrentTag	
			}
		})

		this.loadHistories(newCurrentTag)
	}

	render(){
		return (
			<div className={this.state.background}>

				<div className="container-fluid containerSticky">
					<div className="row">
						<div className="col-xs-12 col-md-12">
							<NavBarWall 
								tags = {this.state.tags}
								handlerNextTag = {this.handlerNextTag}
								handlerAfterTag = {this.handlerAfterTag}
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