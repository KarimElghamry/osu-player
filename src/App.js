import React from 'react';
import {Howl} from 'howler';
import DancingLogo from './components/dancing_logo/DancingLogo.js';
import UploadSection from './components/upload_section/UploadSection.js';
import PlaybackBoard from './components/playback_controls/PlaybackBoard.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedFile: null, player: null};
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#18171C';
  }

  handleUploadClick = () => {
    this.fileUpload.click();
  };

  render() {
    return (
      <div className="mainContainer">
        <input
          type="file"
          id="file"
          ref={ref => (this.fileUpload = ref)}
          style={{display: 'none'}}
          onChange={() => {
            const uploadedFile = this.fileUpload.files[0];
            let reader = new FileReader();
            reader.addEventListener('load', () => {
              let player = new Howl({
                src: reader.result,
                format: uploadedFile.name
                  .split('.')
                  .pop()
                  .toLowerCase(),
              });
              this.setState({selectedFile: uploadedFile, player: player});
            });
            reader.readAsDataURL(uploadedFile);
          }}
        />
        <DancingLogo />
        {this.state.player != null ? (
          <PlaybackBoard />
        ) : (
          <UploadSection onClick={this.handleUploadClick} />
        )}
      </div>
    );
  }
}

export default App;
