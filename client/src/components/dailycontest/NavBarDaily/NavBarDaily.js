import React, {Component} from 'react'


import AddDayPhoto from './AddDayPhoto'


class NavBarDaily extends Component{
	constructor(){
		super()

	}
	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-4 col-md-2 col-sm-offset-0 col-md-offset-5">
						<div className="row">
							<AddDayPhoto
								config={this.props.config}
								myDogProfile = {this.props.myDogProfile}
								setPoints={this.props.setPoints}/>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default NavBarDaily