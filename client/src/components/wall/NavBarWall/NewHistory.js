import React, {Component} from 'react'

import {Row, Col, Image, Modal, Button, FormGroup, Radio } from 'react-bootstrap'

import CapitalLetter from '../../../utilities/CapitalLetter'

import tochoFoto from './tochoFoto'

import HistoriesApi from '../../../services/HistoriesApi'

class NewHistory extends Component{
	constructor(){
		super()

		this.state={
			selectedTag:'',
			textbox:'',
			maxLength: 12,
			tagError: false,
			actionError: false,
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

	checkSelectedTag = () => {
		if(this.state.selectedTag)
			return true
	}
	checkTextBox = () => {
		if(this.state.textbox)
			return true
	}

	allAround = () =>{
		if(this.state.selectedTag && this.state.textbox)
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

		if(this.allAround())
			return true
	}

	createNewHistory(){
		return HistoriesApi.createHistory(
			this.props.myDogProfile.name, 
			tochoFoto, 
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
			        				<input type="file" accept="image/*" onChange={this.getImage} className="marginLeftNewHistory"/>
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

