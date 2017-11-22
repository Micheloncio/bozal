import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'


class HeaderSearch extends Component {

	render(){
		return (
				<input 
					type="text" 
					placeholder="Search"
					className="HeaderSearchContainer outlineNone"/>
		)
	}
}

export default HeaderSearch;