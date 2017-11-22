import React, {Component} from 'react'

import {Row, Col } from 'react-bootstrap'

class EditDogFieldDate extends Component{
	constructor(){
		super()

		this.state={
			maxLength: 12,
			birthdate: ''
		}
	}
	setBirthdate = (birthdate) =>{
		this.setState({birthdate})
	}

	handleChange = (e) =>{
		this.setBirthdate(e.target.value)
		this.props.handleChange(e.target.value)
	}

	componentDidMount(){
		const extractDate =  this.props.birthdate.substr(0,10)
		this.setBirthdate(extractDate)
	}

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
						<input 
							maxLength={this.state.maxLength}
							type={this.props.inputType} 
							onChange={this.handleChange}
							value={this.state.birthdate}
						/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default EditDogFieldDate
