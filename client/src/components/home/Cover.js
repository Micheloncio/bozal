import React,{Component} from 'react'

import '../../styles/Cover.css'

import windowsPNG from "../../images/windows.png"

class Cover extends Component{
	render(){
		return (
			<div>
				<img className="imgCover" src={windowsPNG} />
			</div>
		)
	}
}

export default Cover