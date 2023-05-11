import React from 'react';

function Resume() {
  return (
  <div className="container d-flex flex-column m-5">
    <div className="card">
      <h5 className="card-header">Checkout my resume!</h5>
      <div className="card-body">
        <h5 className="card-title">Proficiencies</h5>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
        <a href="../../public/files/Moises Perez.pdf" download class="btn btn-primary">Download my resume</a>
      </div>
    </div> 
  </div>
  );
}

export default Resume;