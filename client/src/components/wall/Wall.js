import React, {Component} from 'react'

import '../../styles/wall/Wall.css'

import NavBarWall from './NavBarWall/NavBarWall'
import History from './History'

import HistoriesApi from '../../services/HistoriesApi'

class Wall extends Component{
	constructor(props){
		super(props)

		this.state = {
			histories:[],
			currentTag: 'mountain',
			nextTag: 'beach',
			afterTag: 'home'
		}
	}

	componentWillMount(){
		this.loadHistories(this.state.currentTag)
	}

	loadHistories = (tag) => {
		HistoriesApi.getLast24HoursHistoriesByTag(tag)
			.then(histories =>{
				this.setState({histories})
			})
			.catch()
	}

	handlerNextTag = () =>{
		const tagSaved = this.state.nextTag

		this.setState({
			nextTag: this.state.afterTag,
			afterTag: this.state.currentTag,
			currentTag: tagSaved			
		})

		this.loadHistories(tagSaved)
	}

	handlerAfterTag = () => {
		let tagSaved = this.state.afterTag

		this.setState({
			afterTag: this.state.nextTag,
			nextTag: this.state.currentTag,
			currentTag: tagSaved
		})

		this.loadHistories(tagSaved)
	}

	handlerAddComment = () => {

	}

	render(){
		return (
			<div className="backgroundWall">
				<div className="container-fluid containerSticky">
					<div className="row">
						<div className="col-xs-12 col-md-12">
							<NavBarWall 
								currentTag = {this.state.currentTag}
								nextTag = {this.state.nextTag}
								afterTag = {this.state.afterTag}
								handlerNextTag = {this.handlerNextTag}
								handlerAfterTag = {this.handlerAfterTag}
							/>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						{this.state.histories.map((history) =>  ( 
									<div className="col-xs-12 col-sm-6 col-md-6">
										<History 
											nameDog = {history.nameDog}
											imgDog = {history.photo}
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