import { faAudioDescription } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const AboutMe = ({ about }) => {
  console.log(about);
  let { description, extraInfo, ciscoDevInfo, freeTime } = about;
  return (
    <div className="paneContainer">
      <h1>About Me</h1>
      <div className="paneCard">
        <section>
          <p>{description}</p>
        </section>
        <section>
          <p>{extraInfo}</p>
        </section>
        <section>
          <p>{ciscoDevInfo}</p>
        </section>
        <section>
          <p>{freeTime}</p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
