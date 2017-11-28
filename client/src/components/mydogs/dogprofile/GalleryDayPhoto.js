import React, {Component} from 'react'

import GalleryDayPhotoXL from './GalleryDayPhotoXL'

class GalleryDayPhoto extends Component{
	constructor(){
		super()
		this.state = {
			frameClass:'frame-128 frame-black-128',
			modalShow: false,
		}
	}

	setFrameClass = (frameClass) =>{
		this.setState({frameClass})
	}

	setModalShow = (modalShow) => {
		this.setState({modalShow})
	}

	handleSeeGallery=()=>{
		this.setModalShow(!this.state.modalShow)
	}

	loadFrame = (badge) =>{
		switch(badge){
			case 'gold':
				this.setFrameClass('frame-128 frame-gold-128')
				break
			case 'silver':
				this.setFrameClass('frame-128 frame-silver-128')
				break
			case 'bronze':
				this.setFrameClass('frame-128 frame-bronze-128')
				break
		}
	}

	handleSeePhoto=()=>{
		this.setModalShow(!this.state.modalShow)
	}

	componentDidMount(){
		this.loadFrame(this.props.dayPhoto.badge)
	}

	render(){
		return (
			<div className="displayInlineBlock cursorPointer" onClick={this.handleSeePhoto}>
				<div className={this.state.frameClass}>
				</div>
				<img 
					className="img-gallery"
					src={this.props.dayPhoto.photo}/>
				{this.state.modalShow 
					? 
					<GalleryDayPhotoXL
						show={this.state.modalShow} 
						onHide={this.handleSeePhoto}
						dialogClassName="custom-modal"
						photo={this.props.dayPhoto.photo}
					/>
					:
					undefined
				}
			</div>
		)
	}
}

export default GalleryDayPhoto