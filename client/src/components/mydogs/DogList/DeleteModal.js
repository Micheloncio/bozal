import React, {Component} from 'react'

import {Row, Col, Modal, Button } from 'react-bootstrap'

import DogsApi from '../../../services/DogsApi'


class DeleteModal extends Component{

	constructor(){
		super()

		this.state={
			textbox:''
		}
	}
	setTextbox(textbox){
		this.setState({textbox})
	}

	handleChangeTextbox = (e) =>{
		this.setTextbox(e.target.value)
	}
	checkDeleteBox = () =>{
		if(this.state.textbox.toLowerCase() === this.props.nameDog.toLowerCase())
			return true

		return false
	}
	deleteDog(){
		DogsApi.deleteDog(this.props.idDog)
		this.props.deleteDog(this.props.idDog)
		this.props.onHide(undefined,0)
	}
	handleDeleteDog = (e)=>{
		e.preventDefault()
		if(this.checkDeleteBox())
			this.deleteDog()
	}

	render(){
		return (
				<Modal {...this.props}>
					
    				<Modal.Header closeButton>   
    					<h2 className="glyphicon glyphicon-warning-sign h2DeleteDog"></h2>
    					<h1 className="glyphicon h2DeleteDog"> DELETE DOG </h1>
    				</Modal.Header>
	        		<Row>
	        			<Modal.Body>  

							<Row>
			        			<Col xs={11} xsOffset={1}>
			        				<p>Are you sure? If you eliminate your dog you will not be able to recover it. Write the name of your dog ({this.props.nameDog}) to delete this dog:</p>
			        				<input type="text" onChange={this.handleChangeTextbox}/>
			        			</Col>
			                </Row>
						</Modal.Body>
					</Row>

						<Modal.Footer>
				            <Button onClick={(e) => this.props.onHide(e,0)}>Cancel</Button>
				            <Button onClick={this.handleDeleteDog}>Delete dog</Button>
				        </Modal.Footer>

			     </Modal>
				)
	}
}

export default DeleteModal

