import React from 'react';
import {Howl} from 'howler';
import DancingLogo from './components/dancing_logo/DancingLogo.js';
import UploadSection from './components/upload_section/UploadSection.js';
import PlaybackBoard from './components/playback_controls/PlaybackBoard.js';
import LoadingIndicator from './components/loading_indicator/LoadingIndicator.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      playing: false,
      loading: false,
      songName: null,
    };
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
            this.setState({loading: true});
            const uploadedFile = this.fileUpload.files[0];
            var songName = '';
            var nameArray = uploadedFile.name.split('.');
            for (var i = 0; i < nameArray.length - 1; i++) {
              songName += nameArray[i];
            }

            let reader = new FileReader();
            reader.addEventListener('load', async () => {
              let player = new Howl({
                src: reader.result,
                format: uploadedFile.name
                  .split('.')
                  .pop()
                  .toLowerCase(),
                onend: () => this.setState({playing: false}),
                onpause: () => this.setState({playing: false}),
                onplay: () => this.setState({playing: true}),
                onload: () =>
                  this.setState({
                    player: player,
                    loading: false,
                    songName: songName,
                  }),
                onloaderror: () => {
                  alert('Upload a valid file');
                  this.setState({loading: false});
                },
              });
            });
            reader.readAsDataURL(uploadedFile);
          }}
        />
        <DancingLogo player={this.state.player} playing={this.state.playing} />
        <div>{this.state.player != null ? this.state.songName : null}</div>
        {!this.state.loading ? (
          this.state.player != null ? (
            <PlaybackBoard
              player={this.state.player}
              playing={this.state.playing}
            />
          ) : (
            <UploadSection onClick={this.handleUploadClick} />
          )
        ) : (
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default App;
