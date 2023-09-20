import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'The-Magic-Carpet',
      description: "A travel application that allows users to search for flights using MERN stack.",
      link: "https://the-magic-carpet-037d75dd3e3d.herokuapp.com/",
      repo: "https://github.com/Jason-Kodama/The-Magic-Carpet"
    },
    {
      name: 'Boss-Fight',
      description: 'An application that allows a user to pick the winner of a fight between video game bosses.',
      link: "https://bizthehabesha.github.io/group-6-project-1/",
      repo: "https://github.com/Jason-Kodama/group-6-project-1"
    },
    {
      name: 'Chat Camp',
      description: 'A chat application that allows users to login and chat with fellow bootcamp students. Also has ChatGPT integrated to ask questions using AI.',
      link: "https://chat-camp.herokuapp.com/",
      repo: "https://github.com/Jason-Kodama/Portfolio-02"
    },
    {
      name: 'book-search',
      description: 'A book search application using the MERN stack.',
      link: "https://github.com/Jason-Kodama/Jasons-book-search",
      repo: "https://github.com/Jason-Kodama/Jasons-book-search"

    },
    {
      name: 'noSql-api',
      description: 'Using noSQL, this is a social network API that allows a user to create and share a thought and react to another friends thought.',
      link: "https://github.com/Jason-Kodama/Jasons-noSql-api",
      repo: "https://github.com/Jason-Kodama/Jasons-noSql-api"
    },
    {
      name: 'note-taker',
      description: 'A note taking application using Express.js',
      link: "https://github.com/Jason-Kodama/Jasons-express-notetaker",
      repo: "https://github.com/Jason-Kodama/Jasons-express-notetaker"
    }
  ]);

  return (
    <div className='portfolio'>
      <div className='flex-row'>
        <div className='card'>
          {projects.map((project, idx) => (
            <Project
              project={project}
              key={"project" + idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;