import React from 'react';
import DancingLogo from './components/dancing_logo/DancingLogo.js';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="mainContainer">
        <DancingLogo />
      </div>
    );
  }

  componentDidMount () {
    document.body.style.backgroundColor = '#18171C';
  }
}

export default App;
