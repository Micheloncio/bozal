import React, {Component} from 'react'


class AddHistory extends Component{
	render(){
		return (
			<div className="addHistory containerAddHistory translateDown cursorPointer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-6">
							<div className="iconAddHistory glyphicon glyphicon-plus" />
						</div>
						<div className="col-xs-6">
							<div className="iconCamHistory glyphicon glyphicon-camera" /> 
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AddHistory