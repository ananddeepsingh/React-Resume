import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import About from './about';
import Experience from './experience';
import Projects from './Projects';
import Skills from './Skills';
import Interests from './Interest';
import Language from './Language';
import Education from './Education';

class App extends Component {
	
	renderExperiences(){
		let results = [];
		
		resume.experiences.map((item,i) => {
			results.push(<Experience item={item} key={i} />);
		})
		
		return results;
	}
	
	renderProjects(){
		let results = [];
		
		resume.projects.map( (item,i) => {
			results.push(<Projects item={item} key={i}/>);
		})
		
		return results;
	}
	
	renderSkills(){
		let results = [];
		
		resume.skills.map( (item,i) => {
			results.push(<Skills item={item} key={i} />)
			
		})
		return results;
	}
	
	renderInterest(){
		let results = [];
		
		resume.interests.map( (item,i) => {
			
			results.push(<Interests item={item} key={i} />)
			
		})
		return results;
	}
	
	renderLang(){
		let results = [];
		
		resume.languages.map( (item,i) => {
			results.push( <Language item={item} key={i} /> )
		});
		
		return results;
	}
	
	renderEducation(){
		let results = [];
		
		resume.education.map( (item,i) => {
			results.push( <Education item={item} key={i} /> )
		});
		
		return results;
	}
	
	constructor(){
		super();
		
		this.state = {
            data: []
        };
	};
	
	componentDidMount() {
		fetch("resume.json")
		.then( (response) => {
			console.log(response);
			//return response.json();
			return response
		})   
		.then( (json) => {
			this.setState({data: json});
		});
  };
	
	render() {
		
		return (
		<div className="wrapper">
			
			<div className="sidebar-wrapper">
				<div className="profile-container">
					<img className="profile" src={resume.img} alt="" />
					<h1 className="name">{resume.name} </h1>
					<h3 className="tagline">{resume.designation}</h3>
				</div>
				
				<div className="contact-container container-block">
					<ul className="list-unstyled contact-list">
						<li className="email"><a href="mailto: {resume.email}" title={resume.email}><i className="fa fa-envelope"></i></a></li>
						<li className="website"><a href={resume.website} target="_blank"  title={resume.website}><i className="fa fa-globe"></i></a></li>
						<li className="linkedin"><a href={resume.linkedInURL} target="_blank"  title={resume.linkedInURL}><i className="fa fa-linkedin"></i></a></li>
						<li className="github"><a href={resume.githubURL} target="_blank" title={resume.githubURL}><i className="fa fa-github"></i></a></li>
						<li className="twitter"><a href={resume.twitterURL}  title={resume.twitterURL} target="_blank"><i className="fa fa-twitter"></i></a></li>
					</ul>
				</div>
				<div className="education-container container-block">
					<h2 className="container-block-title">Education</h2>
					{ this.renderEducation() }
				</div>
				
				<div className="languages-container container-block">
					<h2 className="container-block-title">Languages</h2>
					{ this.renderLang() }
				</div>
				
				<div className="interests-container container-block">
					<h2 className="container-block-title">Interests</h2>
					{ this.renderInterest() }
						
				</div>
				
			</div>
			
			<div className="main-wrapper">
				
				<section className="section summary-section">
					<h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
					<div className="summary">
						<p>Having 9+ years of experience in UI development. Expertise in PSD to HTML5, CSS, SASS, Responsive Web Design, JQuery, Native JavaScript, Bootstrap, Ajax, Handlebar.js, Photoshop</p>
						<p>Hands-on Angular.js, Node.js, Express.js, React, Agile Methodology(SCRUM), GIT version control, GRUNT, Gulp, SEO,</p>
						<p>Team Handling experience of three people where my role involved discussion with stockholders, and suggest best approach for their day to day queries.</p>
					</div>
				</section>
				
				<section className="section experiences-section">
					<h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
					{ this.renderExperiences() }
				</section>
				
				<section className="section projects-section">
					<h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
					{ this.renderProjects() }
				</section>
				
				<section className="skills-section section">
					<h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
					<div className="skillset">        
					{ this.renderSkills() } 
					</div>  
				</section>
				
			</div>
		</div>
    );
  }
}

export default App;
