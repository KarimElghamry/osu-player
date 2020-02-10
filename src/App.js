import React from 'react';
import DancingLogo from './components/dancing_logo/DancingLogo.js';
import UploadSection from './components/upload_section/UploadSection.js';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {selectedFile: null};
  }

  componentDidMount () {
    document.body.style.backgroundColor = '#18171C';
  }

  handleUploadClick = () => {
    this.fileUpload.click ();
  };

  render () {
    return (
      <div className="mainContainer">
        <input
          type="file"
          id="file"
          ref={ref => (this.fileUpload = ref)}
          style={{display: 'none'}}
          onChange={() => {
            const uploadedFile = this.fileUpload.files[0];
            this.setState ({selectedFile: uploadedFile});
          }}
        />
        <DancingLogo />
        <UploadSection onClick={this.handleUploadClick} />
        <div
          style={{
            color: 'white',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {this.state.selectedFile != null
            ? this.state.selectedFile.name
            : null}
        </div>
      </div>
    );
  }
}

export default App;
