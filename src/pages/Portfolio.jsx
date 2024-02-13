// Portfolio.js

import React from 'react';
import '../assets/css/portfolio.css';
import portfolioData from '../data/PortfolioData';

const Portfolio = () => {
    return (
        <div className="main-container portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {portfolioData.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.image} alt={project.name} />
                        <div className="project-details">
                            <h3>{project.name}</h3>
                            <p>Stack: {project.stack}</p>
                            <p>Client: {project.client}</p>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
