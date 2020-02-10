import React from 'react';
import './DancingLogo.css';

const expandedWidth = 'calc((50vw + 50vh) / 2.4)';
const defaultWidth = 'calc((50vw + 50vh) / 3)';

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
      const size = this.state.expanded ? expandedWidth : defaultWidth;
      document.body.style.setProperty ('--global--width', size);
    }, 300);
  }

  render () {
    return (
      <div className="logoContainer">
        <div
          className="whiteCircle"
          onMouseEnter={() => {
            this.setState ({pauseAnimation: true, expanded: true});
            document.body.style.setProperty ('--global--width', expandedWidth);
          }}
          onMouseLeave={() => {
            this.setState ({pauseAnimation: false, expanded: false});
            document.body.style.setProperty ('--global--width', defaultWidth);
          }}
        >
          <div className="pinkCircle">osu!</div>
        </div>
      </div>
    );
  }
}

export default DancingLogo;
