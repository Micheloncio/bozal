import React, {Component} from 'react'

class SelectDog extends Component {
	setMainDog = (dog,itsSelect) =>{
		this.props.setDogSelected(dog)
		this.props.setAnyDogSelected(itsSelect)
	}

	selectADog = (idDog) =>{
		const dogSelected = this.props.config.myDogs.filter(dog =>{return dog._id === idDog})
		this.setMainDog(dogSelected[0],true)
	}
	deselectADog  = () =>{
		this.setMainDog({},false)
	}
	handleChange = (e) =>{
		if(e.target.value)
			this.selectADog(e.target.value)
		else
			this.deselectADog()
	}

	render(){
		return (
			<div>
				<div className="col-xs-6">
					<div>
						Dog
					</div>
				</div>
				<div className="col-xs-5">
					<div className="selectDogContainer">
						<select className="inputSelectDog" onChange={this.handleChange} defaultValue={this.props.config.dogSelected.name}>
							<option value=""></option>
							{this.props.config.myDogs.map((dog, index)=>{
								return <option key={index} value={dog._id}>{dog.name}</option>
							})}
						</select>
					</div>
				</div>
				<div className="col-xs-offset-1">
				</div>
			</div>
		)
	}
}
export default SelectDog;