
import React, {Component} from 'react'

class NoDogsYet extends Component{
	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-3">
						<p className="noDogsText cursorDefault">Yo do not have any dog yet</p>
					</div>
					<div className="col-xs-offset-0 col-sm-offset-6 col-md-offset-4">
					</div>
				</div>
			</div>
		)
	}
}

export default NoDogsYet
