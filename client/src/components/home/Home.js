import React, {Component} from 'react'

import Cover from './Cover'
import CreateAccount from './CreateAccount'

import '../../styles/Home.css'

class Home extends Component{
	render(){
		return(
			<div className="backgroundHomeHome">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<Cover />
						</div>
						<div className="col-md-1">
						</div>
						<div className="col-md-6">
							<CreateAccount 
								setIdUser={this.props.setIdUser}
			          			loadDogs={this.props.loadDogs}/>
						</div>
					</div>		
				</div>
			</div>
		)
	}
}

export default Home