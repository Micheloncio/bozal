import React, {Component} from 'react'
import {Row, Col, Image, Modal } from 'react-bootstrap'

import CapitalLetter from '../../../utilities/CapitalLetter'

import DogProfileModal from '../../commons/dogprofile/DogProfileModal'

class Search extends Component{
	constructor(){
		super()

		this.state={
			modalShow: 0
		}
	}

	setmodalShow = (modalShow) => {
		this.setState({modalShow})
	}

	handleShowHideDogProfile= (e,index) => {
		if(e){
			e.preventDefault()
			e.stopPropagation()
			e.nativeEvent.stopImmediatePropagation()
		}
		this.setmodalShow(index || 0)
	}
	render(){
		return (
			<Modal {...this.props}>
			<Modal.Header closeButton>   
				<h3>{"Results for " + this.props.searchBox}</h3>
			</Modal.Header>
			<Row>
				<Modal.Body>  
					<div className="text-center">
						{this.props.searchedDogs.length
							?
							this.props.searchedDogs.map((searchedDog,index) =>{
								return(
									<div key={index}>
										<h4>{CapitalLetter(searchedDog.name)}</h4>
										<Image
											onClick={(event) =>{this.handleShowHideDogProfile(event,index+1)}} 
											className="imageDogProfile"
											src={searchedDog.profilePhoto} 
											circle 
											width="150px"
											height="150px">
										</Image>
										{this.state.modalShow  === index+1
											? 
											<DogProfileModal 
												config={this.props.config}
												show={this.state.modalShow} 
												onHide={this.handleShowHideDogProfile}
												dialogClassName="dogProfileModal"
												idDog = {searchedDog._id}
												myDogProfile = {searchedDog}
											/>
											:
											undefined
										}
									</div>
								)
							})
							:
							<h4>No dogs founds...</h4>
						}
					</div>
				</Modal.Body>
			</Row>
		  </Modal>

		)
	}
}

export default Search