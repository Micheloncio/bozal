import React, {Component} from 'react'

import {Row, Col } from 'react-bootstrap'

class NewDogSelectBreed extends Component{

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
						<select onChange={this.props.handleChange}>
							<option value="" selected></option>
			 				<option value="240">240</option>
							<option value="150">150</option>
						</select>
					</Col>
				</Row>
			</div>
		)
	}
}

export default NewDogSelectBreed