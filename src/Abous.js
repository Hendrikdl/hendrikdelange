import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Me</h1>
      <img 
        src="/media/profile.jpg"
        style={{ width: '400px', height: '400px', borderRadius: '50%', margin: '20px 0' }} 
      />
      <p>
        With over 20 years of experience in the financial services industry, I bring a well‑rounded and practical approach to helping clients protect, grow, and manage their finances with confidence.

My career began in banking, where I gained extensive experience across banking solutions, short‑term insurance, and investments. Over the years, this foundation allowed me to develop a deep understanding of risk management, financial planning, and client‑focused service.

In the last year, I have been working as a Financial Advisor, expanding my expertise into Long‑Term Insurance, Retirement Planning, and Estate Planning. This role allows me to take a holistic view of my clients’ financial needs — from protecting income and assets today to planning for long‑term security and legacy.

My professional background is supported by strong academic credentials. I have completed my National Certificate in Banking and hold a Degree in Computer Science, which equips me with strong analytical, problem‑solving, and systems‑based thinking skills. This unique combination of finance and technology enables me to offer structured, informed, and forward‑thinking financial solutions.

I am passionate about building long‑term relationships based on trust, transparency, and tailored advice, helping individuals and families make informed financial decisions at every stage of life.
      </p>
      <p>
        Add more details about yourself here.
      </p>
    </div>
  );
}

export default About;
