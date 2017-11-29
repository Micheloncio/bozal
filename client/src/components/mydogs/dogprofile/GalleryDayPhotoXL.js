import React, {Component} from 'react'
import {Row, Modal } from 'react-bootstrap'


class GalleryDayPhotoXL extends Component{

	render(){
		return (
			<Modal {...this.props}>
			<Modal.Header closeButton>   
			</Modal.Header>
			<Row>
				<Modal.Body>  
					<div className="text-center">
						<img 
							src={this.props.photo}
							className="img-xl"/>
					</div>
				</Modal.Body>
			</Row>
		  </Modal>

		)
	}
}

export default GalleryDayPhotoXL