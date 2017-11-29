import React, {Component} from 'react'

import Cover from './Cover'

class Home extends Component{
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<Cover />
					</div>
					<div className="col-md-6">
					</div>
				</div>		
			</div>
		)
	}
}

export default Home