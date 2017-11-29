import React, {Component} from 'react'

import Cover from './Cover'
import CreateAccount from './CreateAccount'

class Home extends Component{
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<Cover />
					</div>
					<div className="col-md-6">
						<CreateAccount 
							setIdUser={this.props.setIdUser}
		          			loadDogs={this.props.loadDogs}/>
					</div>
				</div>		
			</div>
		)
	}
}

export default Home