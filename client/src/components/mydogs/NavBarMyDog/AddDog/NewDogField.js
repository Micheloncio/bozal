import React, {Component} from 'react'

import {Row, Col } from 'react-bootstrap'

class NewDogField extends Component{
	constructor(){
		super()

		this.state={
			maxLength: 12
		}
	}

	render(){
		return (
			<div className="marginNewDogFields">
				<Row>
					<Col xs={12} md={3}>
						<h4 className={this.props.error ? "checkError" : undefined}>
							{this.props.label}
						</h4>
					</Col>
					<Col xs={12} md={9}>
						<input 
							maxLength={this.state.maxLength}
							type={this.props.inputType} 
							onChange={this.props.handleChange}
						/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default NewDogField