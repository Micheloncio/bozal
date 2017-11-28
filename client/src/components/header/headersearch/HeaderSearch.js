import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import DogsApi from '../../../services/DogsApi'

import Search from './Search'

class HeaderSearch extends Component {
	constructor(){
		super()
		this.state={
			searchBox:'',
			savedSearchBox:'',
			modalShow: false,
			searchedDogs:[]
		}
	}

	setSearchBox = (searchBox) =>{
		this.setState({searchBox})
	}
	setSavedSearchBox = (savedSearchBox) =>{
		this.setState({savedSearchBox})
	}
	setModalShow = (modalShow) => {
		this.setState({modalShow})
	}
	setSearchedDogs = (searchedDogs) =>{
		this.setState({searchedDogs})
	}

	handleSeeSearch=()=>{
		this.setModalShow(!this.state.modalShow)
	}

	searchDogs = (search) =>{
		DogsApi.searchDogs(search)
			.then(dogs=>{
				this.setSearchedDogs(dogs)
				this.setModalShow(true)
				this.setSearchBox('')
			})
	}

	handleChangeSearchBox = (e) =>{
		this.setSearchBox(e.target.value)
	}

	handleSearchDogs = (e) =>{
		if(e.key === 'Enter' && this.state.searchBox){
			this.setSavedSearchBox(this.state.searchBox)
			this.searchDogs(this.state.searchBox)
			this.setSearchBox('Searching...')
		}
	}

	render(){
		return (
			<div>
				<input 
					type="text" 
					placeholder="Search"
					value={this.state.searchBox}
					onChange={this.handleChangeSearchBox}
					onKeyPress={this.handleSearchDogs}
					className="HeaderSearchContainer outlineNone"/>
				{this.state.modalShow 
					? 
					<Search
						config={this.props.config}
						show={this.state.modalShow} 
						onHide={this.handleSeeSearch}
						dialogClassName="custom-modal"
						searchBox={this.state.savedSearchBox}
						searchedDogs={this.state.searchedDogs}/>
					:
					undefined
				}
			</div>
		)
	}
}

export default HeaderSearch;