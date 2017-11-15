import React, {Component} from 'react'

import '../../../styles/wall/NavBarWall.css'

import SignPosterLeft from './SignPosterLeft'
import SignPosterCenter from './SignPosterCenter'
import SignPosterRight from './SignPosterRight'

class NavBarWall extends Component{
	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2">
						<SignPosterLeft 
							tag = {this.props.afterTag}
							handlerAfterTag = {this.props.handlerAfterTag}
						/>
					</div>
					<div className="col-md-2 col-md-offset-3">
						<SignPosterCenter 
							currentTag = {this.props.currentTag}
						/>
					</div>
					<div className="col-md-2 col-md-offset-3">
						<SignPosterRight 
							tag = {this.props.nextTag}
							handlerNextTag = {this.props.handlerNextTag}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default NavBarWall