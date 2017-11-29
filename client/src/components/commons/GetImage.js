import React, {Component} from 'react'
import Cropper from 'react-cropper';
import {Row, Col, Modal, Button } from 'react-bootstrap'

import 'cropperjs/dist/cropper.css'


class GetImage extends Component{
	constructor(){
		super()

		this.state={
			image:'',
			croppedImage:''
		}
	}

	setImage = (image) =>{
		this.setState({image})
	}
	setCroppedImage = (croppedImage) =>{
		this.setState({croppedImage})
	}

	_crop(){
    	this.setCroppedImage(this.refs.cropper.getCroppedCanvas().toDataURL())
  	}

  	handleGetImage = (e) =>{
  		this.setImage(URL.createObjectURL(e.target.files[0]))
  	}
  	handleSavePhoto = (e) =>{
  		e.preventDefault()
  		this.props.onHide()
		this.props.handleSetDogPhoto(this.state.croppedImage)
  	}
	render(){
		return (
			<Modal {...this.props}>			
				<Modal.Header closeButton>   
					<h4>Add photo</h4>       					
				</Modal.Header>
			<Row>
				<Modal.Body>  
					<Row>
		    			<Col xs={12} md={12}>
		    				<input 
								type="file" 
								accept="image/*" 
								capture="camera" 
								onChange={this.handleGetImage} />
		    			</Col>
		            </Row>
					<Row>
		    			<Col xs={12} md={12}>
							<Cropper
						        ref='cropper'
						        src={this.state.image}
						        style={{height: '300px', width: '100%'}}
						        aspectRatio={1 / 1}
						        dragMode='move'
						        viewMode={1}
						        cropBoxResizable={false}
						        guides={false}
						        minCropBoxWidth={512}
						        minCropBoxHeight={512}
						        crop={this._crop.bind(this)} />

		    			</Col>
		            </Row>
				</Modal.Body>
			</Row>
				<Modal.Footer>
		            <Button onClick={this.props.onHide}>Cancel</Button>
		            <Button onClick={this.handleSavePhoto}>Accept</Button>
		        </Modal.Footer>

		  </Modal>

		)
	}
}

export default GetImage