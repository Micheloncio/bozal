import React, {Component} from 'react'

import {Row, Col, Image, Modal, Button, FormGroup, Radio } from 'react-bootstrap'

import CapitalLetter from '../../../utilities/CapitalLetter'

import HistoriesApi from '../../../services/HistoriesApi'

import GetImage from './GetImage'

class NewHistory extends Component{
	constructor(){
		super()

		this.state={
			selectedTag:'',
			textbox:'',
			maxLength: 12,
			tagError: false,
			actionError: false,
			photoError: false,
			modalShow: false,
			dogPhoto:''
		}
	}

	setSelectedTag = (selectedTag) => {
		this.setState({selectedTag})
	}
	setTextbox = (textbox) => {
		this.setState({textbox})
	}
	setTagError = (tagError) => {
		this.setState({tagError})
	}
	setActionError = (actionError) => {
		this.setState({actionError})
	}
	setPhotoError = (photoError) => {
		this.setState({photoError})
	}
	setmodalShow = (modalShow) => {
		this.setState({modalShow})
	}
	setDogPhoto = (dogPhoto) =>{
		this.setState({dogPhoto})
	}

	checkSelectedTag = () => {
		if(this.state.selectedTag)
			return true
	}
	checkTextBox = () => {
		if(this.state.textbox)
			return true
	}
	checkDogPhoto = () => {
		if(this.state.dogPhoto)
			return true
	}

	allAround = () =>{
		if(this.state.selectedTag && this.state.textbox && this.state.dogPhoto)
			return true
	}

	checkNewHistory = () =>{
		if(!this.checkSelectedTag())
			this.setTagError(true)
		else
			this.setTagError(false)

		if(!this.checkTextBox())
			this.setActionError(true)
		else
			this.setActionError(false)

		if(!this.checkDogPhoto())
			this.setPhotoError(true)
		else
			this.setPhotoError(false)

		if(this.allAround())
			return true
	}

	createNewHistory(){
		return HistoriesApi.createHistory(
			this.props.myDogProfile.name, 
			this.state.dogPhoto, 
			this.props.myDogProfile.id, 
			this.state.selectedTag, 
			this.state.textbox
		)
	}

	handleCreateHistory = () =>{
		if(this.checkNewHistory()){
			this.createNewHistory()
				.then(res=>{
					this.props.handleLoadNewCurrentTags(this.state.selectedTag)
					this.props.onHide()
				})
				.catch(console.error)
		}
	}

	handleChangeSelectedTag = (e) =>{
		this.setSelectedTag(e.target.value)
	}
	handleChangeTextbox = (e) =>{
		this.setTextbox(e.target.value)
	}
	handleShowHideAddPhoto = () => {
		this.setmodalShow(!this.state.modalShow)
	}
	handleSetDogPhoto = (dogPhoto) =>{
		this.setDogPhoto(dogPhoto)
	}
	render(){
		return (
					<Modal {...this.props}>
					
	        				<Modal.Header closeButton>   
	        					<h4>New history</h4>       					
	        				</Modal.Header>
	        		<Row>
	        			<Modal.Body>  
	        				<Row>
			        			<Col xs={12} md={12}>
			        				<h4 className={this.state.photoError ? "checkError marginLeftNewHistory displayInline" : "marginLeftNewHistory displayInline"}>
			        					Click button for add new photo:
			        				</h4>
			        				<Button 
			        					className="marginLeftNewHistory"
			        					onClick={this.handleShowHideAddPhoto}
			        					>
			        					Add photo
			        				</Button>
			        				{this.state.modalShow 
										? 
										<GetImage 
											show={this.state.modalShow} 
											onHide={this.handleShowHideAddPhoto}
											handleSetDogPhoto={this.handleSetDogPhoto}
											dialogClassName="custom-modal"
										/>
										:
										undefined
									}
									{this.state.dogPhoto
										?
										<img
											className="displayBlock marginLeftNewHistory"
											src={this.state.dogPhoto} 
											width="256px" 
											height="256px">
										</img>
										:
										undefined
									}
			        				
			        			</Col>
			                </Row>
		        			<Row>
			        			<Col xs={12} md={12}>
									<h4 className={this.state.tagError ? "checkError marginLeftNewHistory" : "marginLeftNewHistory"}>
										Add tag for your dog's photo:
									</h4>
			        			</Col>
			                </Row>
							<Row>
								<Col xs={12} md={12}>
									<FormGroup className="marginLeftNewHistory" onChange={this.handleChangeSelectedTag}>
										{this.props.tags ? this.props.tags.map((tag,index) =>{
												return (
													<Radio 
														key={index}
												    	value={tag}
												    	name="tagGroup" 
												    	className="radioNewHistory" 
												    	inline
												    >
												    {CapitalLetter(tag)}
												    </Radio>
											    )
											}											
										)
										:undefined
										}
								    </FormGroup>
								</Col>
							</Row>
							<Row>
			        			<Col xs={12} md={12}>
									<h4 className={this.state.actionError ? "checkError marginLeftNewHistory" : "marginLeftNewHistory"}>
										Add and action:
									</h4>
									<input 
										maxLength={this.state.maxLength}
										className="textboxNewHistory" 
										type="text" 
										placeholder="Example: 'Eating'" 
										onChange={this.handleChangeTextbox}
									/>
			        			</Col>
			                </Row>
						</Modal.Body>
					</Row>

						<Modal.Footer>
							{this.state.tagError || this.state.actionError
								? 
								<h5 className="checkError">Red fields required  </h5> 
								: undefined
							}
				            <Button onClick={this.props.onHide}>Close</Button>
				            <Button onClick={this.handleCreateHistory}>Create</Button>
				        </Modal.Footer>

			      </Modal>

				)
	}
}

export default NewHistory

