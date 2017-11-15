import React, {Component} from 'react'

import '../styles/CreateUser.css'

class CreateUser extends Component{
	render(){
		return(
			<div className="centerContent">
				<div className="borderCreateUser">
					<table className="tableCreateUser">
						<tr>
						    <td className="labelCreateUser">E-mail</td>
						    <td><input className="inputCreateUser" type="text"/></td> 
						</tr>
						<tr>
						    <td className="labelCreateUser">Password</td>
						    <td><input className="inputCreateUser" type="password"/></td> 
						</tr>
						<tr>
						    <td className="labelCreateUser">Confirm Password</td>
						    <td><input className="inputCreateUser" type="password"/></td> 
						</tr>
					</table>
				</div>
			</div>
		)
	}
}

export default CreateUser