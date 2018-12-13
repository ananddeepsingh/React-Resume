import React from 'react';

export default class Projects extends React.Component{
	render(){
		return(
			<div className="item">
				<span className="project-title"><a href={this.props.item.url} target="_blank">{this.props.item.name} </a></span> - 
				<span className="project-tagline">{this.props.item.detail} </span>
			</div>
		)
	}
}

