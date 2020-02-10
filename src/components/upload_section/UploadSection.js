import React from 'react';
import './UploadSection.css';

class UploadSection extends React.Component {
  render () {
    return (
      <div className="uploadContainer">
        <button className="uploadButton" onClick={() => this.props.onClick ()}>
          Upload
        </button>
      </div>
    );
  }
}

export default UploadSection;
