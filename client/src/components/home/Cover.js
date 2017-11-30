import React,{Component} from 'react'

import '../../styles/Cover.css'


class Cover extends Component{
	constructor(){
		super()

		this.state={
			count: 0,
			imgClass: 'imgCover'
		}
	}
	setCount = (count) =>{
		this.setState({count})
	}
	setImgClass = (imgClass) =>{
		this.setState({imgClass})
	}
	checkCount = (count) =>{
		if(count>5){
			this.setImgClass('imgCoverB')
		}
	}

	increaseCount =() =>{
		this.setCount(this.state.count + 1)
		this.checkCount(this.state.count)
	}
	render(){
		return (
			<div>
				<p className="pCover">Yap Yap es una red perruna, donde los amigos de los perros pueden compartir
				los momentos vividos junto a sus mascotas. Creando un perfil perruno podrás subir fotos, votar las 
				fotos de otros perros, dejar comentarios y mucho más...
				</p>
				<p className="pCover2">
				Pese a que no le deseamos el mal a ningún gato, esta plataforma web está enfocada únicamente a perros, y no permite
				el registro de félinos debido a su carácter independiente y traicionero, muy muy
				traicionero. 
				</p>
				<div className={this.state.imgClass} onClick={this.increaseCount}>
				</div>
			</div>
		)
	}
}

export default Cover