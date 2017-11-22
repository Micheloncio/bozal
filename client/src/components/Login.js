import React, {Component} from 'react'

import '../styles/Login.css'

class Login extends Component{

	render(){
		return (
			<div className="centerContent">
				<div className="borderLogin">
					<table className="tableLogin">
						<tr>
						    <td className="labelLogin">Usuario</td>
						    <td><input className="inputLogin" type="text"/></td> 
						</tr>
						<tr>
						    <td className="labelLogin">Password</td>
						    <td><input className="inputLogin" type="password"/></td> 
						</tr>
					</table>
					<button 
						className="btn btn-default btnalign"
						>Entrar
					</button>
				</div>
			</div>	
		)
	}
}

export default Login