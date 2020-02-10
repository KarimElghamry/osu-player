import React from 'react';
import './DancingLogo.css';

class DancingLogo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      expanded: false,
      pauseAnimation: false,
    };
  }

  componentDidMount () {
    this.dancingEffect ();
  }

  dancingEffect () {
    setInterval (() => {
      if (this.state.pauseAnimation) return;
      this.setState ({expanded: !this.state.expanded});
      const size = this.state.expanded ? '600px' : '500px';
      document.body.style.setProperty ('--global--width', size);
    }, 350);
  }

  render () {
    return (
      <div
        className="whiteCircle"
        onMouseEnter={() => {
          this.setState ({pauseAnimation: true, expanded: true});
          document.body.style.setProperty ('--global--width', '600px');
        }}
        onMouseLeave={() => {
          this.setState ({pauseAnimation: false, expanded: false});
          document.body.style.setProperty ('--global--width', '500px');
        }}
      >
        <div className="pinkCircle">osu!</div>
      </div>
    );
  }
}

export default DancingLogo;
