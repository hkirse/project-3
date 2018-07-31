import React, { Component, Fragment } from 'react';
import { render } from "react-dom";
// import TrailCard from "../../components/TrailCard";
// import Title from "../../components/Title";
// import cities from "../../cities.json";
// import API from "../../utils/API";
// import Jumbotron from '../../components/Jumbotron';
import ReactDropzone from 'react-dropzone';
import request from "superagent";


class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
     });
  }

  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };

    return (
      <div className="app">
        <ReactDropzone
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
          Make a profile picture by dropping an image.  A preview will display below
        </ReactDropzone>
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
        }
      </div>
    );
  }
}

export default Personal;