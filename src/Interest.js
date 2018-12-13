import React from 'react';


export default class Interest extends React.Component{
	render(){
		return(
			<div>
				<ul className="list-unstyled interests-list">
					<li>{this.props.item}</li>
				</ul>
			</div>
		)
	}
}