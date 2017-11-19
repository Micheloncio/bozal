import React, {Component} from 'react'

import Cropper from 'react-cropper';

import 'cropperjs/dist/cropper.css'

import tochoFoto from './wall/NavBarWall/tochoFoto'

class getimage extends Component{
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
  	handleSavePhoto = () =>{
  		console.log(this.state.croppedImage)
  	}
	render(){
		return (
			<div>
				<input 
					type="file" 
					accept="image/*" 
					capture="camera" 
					onChange={this.handleGetImage} />

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

			    <button onClick={this.handleSavePhoto}>Aceptar</button>
			</div>
		)
	}
}

export default getimage