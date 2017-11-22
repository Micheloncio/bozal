import React, {Component} from 'react'

import {Row, Col } from 'react-bootstrap'

class EditDogSelectGender extends Component{

	render(){
		return (
			<div className="marginNewDogFields">
				<Row>
					<Col xs={12} md={2}>
						<h4 className={this.props.error ? "checkError" : undefined}>
							{this.props.label}
						</h4>
					</Col>
					<Col xs={12} md={10}>
						<select onChange={this.props.handleChange} defaultValue={this.props.gender}>
							<option value=""></option>
							<option value="female">Female</option>
			 				<option value="male">Male</option>
						</select>
					</Col>
				</Row>
			</div>
		)
	}
}

export default EditDogSelectGender