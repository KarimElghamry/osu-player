import React from 'react';
import './DancingLogo.css';

class DancingLogo extends React.Component {
  render () {
    return (
      <div
        className="whiteCircle"
        onMouseEnter={() =>
          document.body.style.setProperty ('--global--width', '600px')}
        onMouseLeave={() =>
          document.body.style.setProperty ('--global--width', '500px')}
      >
        <div className="pinkCircle">osu!</div>
      </div>
    );
  }
}

export default DancingLogo;
