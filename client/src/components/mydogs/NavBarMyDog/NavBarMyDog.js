import React, {Component} from 'react'

import AddDog from './AddDog'
import AddoptDog from './AddoptDog'

import '../../../styles/mydogs/NavBarMyDog.css'

class NavBarMyDog extends Component{
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-6 col-sm-3 col-md-2">
						<AddDog 
							idUser={this.props.idUser}/>
					</div>
					<div className="col-xs-6 col-sm-3 col-md-2">
						<AddoptDog />
					</div>
					<div className="col-xs-offset-0 col-sm-offset-6 col-md-offset-8">
					</div>
				</div>		
			</div>
		)
	}
}

export default NavBarMyDog