import React from 'react';
import ReactHtmlParser from 'react-html-parser';


export default class Experience extends React.Component{
	render(){
		return(
			<h2>
				<div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">{this.props.item.title}</h3>
                            <div className="time">{this.props.item.period}</div>
                        </div>
                        <div className="company">{this.props.item.company}</div>
                    </div>
                    <div className="details">
                        <p>{ReactHtmlParser(this.props.item.details)}</p>
                    </div>
                </div>
			</h2>
		)
	}
}
