import React, {Component} from 'react'

import '../../styles/mydogs/MyDogs.css'

import NavBarMyDog from './NavBarMyDog/NavBarMyDog'
import NoDogsYet from './NoDogsYet'
import DogList from './DogList'

class MyDogs extends Component{

	constructor(){
		super()

		this.state = {
			anyDog: true,
			dogs:[]
		}
	}

	render(){
		return(
			<div className="backgroundMyDogs">
				<div className="container-fluid">
					<div className="row">
						<NavBarMyDog />
					</div>		
					<div className="row">
						{this.state.anyDog 
							? <DogList
								dogs={this.state.dogs}/> 
							: <NoDogsYet/>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default MyDogs