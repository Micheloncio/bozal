import React,{Component} from 'react'

import DayPhotoApi from '../../services/DayPhotoApi'

import '../../styles/dailycontest/DailyContest.css'

import NavBarDaily from './NavBarDaily/NavBarDaily'
import DayPhoto from './DayPhoto'

class DailyContest extends Component{
	constructor(){
		super()
		this.state={
			dayPhotos:[],
			auxiliaryText:'Loading...'
		}
	}

	setDayPhotos = (dayPhotos)=>{
		this.setState({dayPhotos})
	}
	setAuxiliaryText = (auxiliaryText) =>{
		this.setState({auxiliaryText})
	}

	pushPhotoToDayPhoto =(dayPhotoToPush) =>{
		const newDayPhotos = this.state.dayPhotos
		newDayPhotos.push(dayPhotoToPush)
		this.setDayPhotos(newDayPhotos)
	}

	loadDayPhotos = () =>{
		DayPhotoApi.retrieveRandomDayphoto()
			.then(dayPhoto =>{
				if(dayPhoto.length){
					this.setDayPhotos(dayPhoto)
					DayPhotoApi.retrieveDifferentRandomDayphoto(dayPhoto[0]._id)
						.then(dayPhoto2 =>{
							if(dayPhoto2.length){
								this.pushPhotoToDayPhoto(dayPhoto2[0])
							}else{
								this.setAuxiliaryText('No photos to vote')
							}
						})
				}else{
					this.setAuxiliaryText('No photos to vote')
				}
			})
	}
	componentDidMount(){
		this.loadDayPhotos()
	}

	render(){
		return (
			<div className="backgroundDaily">
				<NavBarDaily
					config={this.props.config}
					myDogProfile={this.props.myDogProfile}
	          		setPoints={this.props.setPoints}/>
	          	<div className="container-fluid">
	           		<div className="row">
			          	{this.state.dayPhotos.length > 1
			          		?
			          		<div className="dailycontestContainer">
			          			<div className="col-xs-12 col-md-5">
	          						<DayPhoto
	          							config={this.props.config}
	          							dayPhoto = {this.state.dayPhotos[0]}
	          							myDogProfile={this.props.myDogProfile}
	          							loadDayPhotos={this.loadDayPhotos}
	          							setPoints={this.props.setPoints}/>
	          					</div>
	          					<div className="col-xs-12 col-md-2">
	          						<div className="vsDailyContainer">
          							<h1 className="displayInline vsDailyText">VS</h1>
          							</div>
          						</div>
          						<div className="col-xs-12 col-md-5">
	          						<DayPhoto
	          							config={this.props.config}
	          							dayPhoto = {this.state.dayPhotos[1]}
	          							myDogProfile={this.props.myDogProfile}
	          							loadDayPhotos={this.loadDayPhotos}
	          							setPoints={this.props.setPoints}/>
	          					</div>
          					</div>
			          		:
			          		<h1 className="marginTop200px">{this.state.auxiliaryText}</h1>
			          	}
		          	</div>
		         </div>
			</div>
		)
	}
}

export default DailyContest