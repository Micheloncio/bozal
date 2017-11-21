
import React, {Component} from 'react'

class DogList extends Component{

	render(){
		return(
			<div className="container-fluid dogListContainer">
				{this.props.dogs.map((dog,index) =>{return (
					<div key={index} className="row">
						<div className="col-xs-12 col-sm-offset-0 col-md-offset-1 col-lg-offset-1 col-sm-6 col-md-4 col-lg-4">
							<div onClick={()=>{this.props.selectADog(dog._id)}} className="outlineNone cursorPointer">
								<div className="container-fluid elementDogList">
									<div className = "row">
										<div className="col-xs-4">
											{dog.name}
										</div>
										<div className="col-xs-4">
											Level:{dog.level}
										</div>
										<div className="col-xs-4">
											Points:{dog.points}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xs-offset-0 col-sm-offset-6 col-md-offset-7 col-lg-offset-7">
						</div>
					</div>
					)
				})}
			</div>
		)
	}
}

export default DogList