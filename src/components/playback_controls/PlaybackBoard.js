import React from 'react';
import './PlaybackBoard.css';

class PlaybackBoard extends React.Component {
  render() {
    return (
      <div className="boardContainer">
        <div
          className={this.props.playing ? 'pauseButton' : 'playButton'}
          onClick={() =>
            this.props.playing
              ? this.props.player.pause()
              : this.props.player.play()
          }
        />
      </div>
    );
  }
}

export default PlaybackBoard;
