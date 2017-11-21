import React, {Component} from 'react'

import {Row, Col, Image, Modal, Button } from 'react-bootstrap'

import DogsApi from '../../../services/DogsApi'


class DeleteModal extends Component{

	render(){
		return (
				<Modal {...this.props}>
					
    				<Modal.Header closeButton>   
    					<h2 className="glyphicon glyphicon-warning-sign h2DeleteDog">DELETE DOG!!</h2>       					
    				</Modal.Header>
	        		<Row>
	        			<Modal.Body>  

							<Row>
			        			<Col xs={12} md={12}>
			        				<p>Are you sure?(Write the name of your dog to delete dog)</p>
			        			</Col>
			                </Row>
			                <Row>
			                	<input type="text"/>
			                </Row>
						</Modal.Body>
					</Row>

						<Modal.Footer>
				            <Button onClick={this.props.onHide}>Cancel</Button>
				            <Button onClick={this.handleCreateDog}>Delete dog</Button>
				        </Modal.Footer>

			     </Modal>
				)
	}
}

export default DeleteModal

