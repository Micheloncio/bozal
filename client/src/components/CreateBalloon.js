import React, {Component} from 'react'

import globo from '../images/globo.png'

class CreateBalloon extends Component{

	constructor(){
		super()

		this.ctx = {}
		this.balloon = new Image()
		this.photo = new Image()

		this.state = {
			imgSource:'',
			isMousePress: false
		}

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
	}

	handleMouseDown() {
		console.log('hola')
        this.setState({ isMousePress: true});
    }
    handleMouseUp() {
    	console.log('adios')
        this.setState({ isMousePress: false});
    }

    handleMouseMove(event) {
	    if (this.state.isMousePress) {
	        this.clear()
	        this.ctx.drawImage(this.balloon, event.clientX - this.balloon.width / 4,
	            event.clientY - this.balloon.height / 4, this.balloon.width/2,this.balloon.height/2)
	    }
	}
	
	clear() {
    	this.ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height)
    	this.ctx.drawImage(this.photo, 0, 0, this.photo.width/2, this.photo.height/2)
	}	

	getImage = (e) =>{
		if (e.target.files && e.target.files[0]) {

    		this.ctx.canvas.addEventListener('mousedown',this.handleMouseDown,false) 

			this.ctx.canvas.addEventListener('mouseup', this.handleMouseUp, false)

			this.ctx.canvas.addEventListener('mousemove', this.handleMouseMove, false)


    		this.balloon.src = globo
			
    		this.photo.src = URL.createObjectURL(e.target.files[0])
			
			this.photo.onload = function() {
			    this.ctx.drawImage(this.photo, 20,20, this.photo.width/2, this.photo.height/2)
			    this.balloon.onload= function(){
					this.ctx.drawImage(this.balloon, 20,20,this.balloon.width/2,this.balloon.height/2)
				}
			}
			
						
			
		}
	}

	componentDidMount = () =>{
		console.log(this.ctx)
		this.ctx = this.refs.canvas.getContext('2d')
		console.log(this.ctx)
	}
	render(){
		return(
			<div>
				<div>
					<input type="file" accept="image/*" onChange={this.getImage} />
				</div>
				<div>
					<canvas ref="canvas" width={600} height={800} />
				</div>
			</div>
		)
	}
}

export default CreateBalloon