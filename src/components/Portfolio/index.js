import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
          name: 'text-editor',
          description: 'PWA',
          link: "https://jasons-pwa-texteditor-18ac94c046a1.herokuapp.com/",
          repo: "https://github.com/Jason-Kodama/Jasons-PWA-textEditor"
          
        },
        {
          name: 'noSql-api',
          description: 'MongoDB',
          link: "https://drive.google.com/file/d/1FJK7t4heKG4PqMkXfpsYqMv6__joQlzJ/view",
          repo: "https://github.com/Jason-Kodama/Jasons-noSql-api"
        },
        {
          name: 'note-taker',
          description: 'express',
          link: "https://protected-harbor-16972.herokuapp.com/",
          repo: "https://github.com/Jason-Kodama/Jasons-express-notetaker"
        },
        {
          name: 'Chat Campt',
          description: 'Node/Express/mySql',
          link: "https://chat-camp.herokuapp.com/",
          repo: "https://github.com/Jason-Kodama/Portfolio-02"
        },
        {
          name: 'Boss-Fight',
          description: 'HTML/CSS/JavaScript',
          link: "https://bizthehabesha.github.io/group-6-project-1/",
          repo: "https://github.com/Jason-Kodama/group-6-project-1"
        },
      ]);

      return (
        <div>
            <div className='flex-row'>
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    />
                ))}
            </div>
        </div>
      );
}

export default Portfolio;