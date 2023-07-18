import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers'

function Project({ project }) {
    const { name, repo, link, description } = project;

    return (
        <div className='project' key={name}>
            <img
                src={require(`../../assets/projects/${name}.jpg`)}
                alt={removeHyphensAndCapitalize(name)}
                className="project"
            />
            <div className='project-text'>
                <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                <a href={repo}>

                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Project;