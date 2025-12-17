import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Me</h1>
      <img 
        src="/resources/profilepicture.jpg"
        style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '20px 0' }} 
      />
      <p>
        This is a placeholder text for the About page. You can replace this with your own content.
      </p>
      <p>
        Add more details about yourself here.
      </p>
    </div>
  );
}

export default About;
