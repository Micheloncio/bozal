import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

import '../../styles/mydogs/MyDogs.css'

import DogProfile from './dogprofile/DogProfile'
import NavBarMyDog from './NavBarMyDog/NavBarMyDog'
import NoDogsYet from './NoDogsYet'
import DogList from './DogList/DogList'

class MyDogs extends Component{

	constructor(){
		super()

		this.state = {
			anyDog: true,
			dogs:[]
		}
	}

	setAnyDog = (anyDog) => {this.setState({anyDog})}
	setDogs = (dogs) => {this.setState({dogs})}

	deleteDog = (idDog) =>{
		const filteredDogs = this.state.dogs.filter(dog =>{
									return dog._id !==	idDog})
		this.props.setMyDogs(filteredDogs)
	}

	setMainDog = (dog,itsSelect) =>{
		this.props.setDogSelected(dog)
		this.props.setAnyDogSelected(itsSelect)
	}

	selectADog = (idDog) =>{
		const dogSelected = this.state.dogs.filter(dog =>{return dog._id === idDog})
		this.setMainDog(dogSelected[0],true)
	}
	deselectADog  = () =>{
		this.setMainDog({},false)
	}

	componentDidMount(){
		this.setDogs(this.props.config.myDogs)
	}
	componentWillReceiveProps(nextProps){
		this.setDogs(nextProps.config.myDogs)
	}

	render(){
		return(
			<div className="backgroundDaily">
			<div className="backgroundMyDogs">
				<div className="bird" data-tip data-for='bird'>
				</div>
				<ReactTooltip  id='bird' className="tooltipBird" place="left" effect="solid">
					<p><strong>Pio Pio</strong></p>
				</ReactTooltip>
				<div className="container-fluid">
					<div className="row">
						<NavBarMyDog 
							idUser={this.props.config.idUser}
							loadDogs={this.props.loadDogs}/>
					</div>		
					{this.props.config.anyDogSelected
						? 
						<DogProfile 
							config={this.props.config}
							dog={this.props.config.dogSelected}
							deselectADog= {this.deselectADog}/>
						:
						<div className="row">
							{this.state.dogs.length 
								? 
								<DogList
									config={this.props.config}
									idUser={this.props.config.idUser}
									dogs={this.state.dogs}
									selectADog={this.selectADog}
									deleteDog={this.deleteDog}
									loadDogs={this.props.loadDogs}/> 
								: 
								<NoDogsYet/>
							}
						</div>
					}
				</div>
			</div>
			</div>
		)
	}
}

export default MyDogs