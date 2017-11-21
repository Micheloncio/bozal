import React, {Component} from 'react'

import {Row, Col, Button, Image } from 'react-bootstrap'

import GetImage from '../../../commons/GetImage'

class NewDogPhoto extends Component{
	constructor(){
		super()
		this.state={
			modalShow: false
		}
	}

	setmodalShow = (modalShow) => {this.setState({modalShow})}

	handleShowHideAddPhoto = () => {
		this.setmodalShow(!this.state.modalShow)
	}

	render(){
		return (
			<div className="marginNewDogFields">
				<Row>
        			<Col xs={12} md={12}>
        				<h4 className={this.props.photoError ? "checkError displayInline" : "displayInline"}>
        					Click button to add new photo:
        				</h4>
        				<Button 
        					className="marginNewDogFields"
        					onClick={this.handleShowHideAddPhoto}
        					>
        					Add dog photo
        				</Button>
        				{this.state.modalShow 
							? 
							<GetImage 
								show={this.state.modalShow} 
								onHide={this.handleShowHideAddPhoto}
								handleSetDogPhoto={this.props.handleSetDogPhoto}
								dialogClassName="custom-modal"
							/>
							:
							undefined
						}
						{this.props.dogPhoto
							?
							<Image
								className="displayBlock marginNewDogFields"
								src={this.props.dogPhoto} 
								width="128px" 
								height="128px"
								circle>
							</Image>
							:
							undefined
						}
        				
        			</Col>
                </Row>
			</div>
		)
	}
}

export default NewDogPhoto



