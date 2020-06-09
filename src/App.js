import React, {Component} from 'react';
import YouTube from 'react-youtube';
import './App.css';

class App extends Component{
  render(){
    const options = {
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    return(
      <div className="App">
        <h1 className="header">Andrew & Jacqueline <br /> Live Wedding Stream</h1>
        <h5 className="centered subheading">
          The ceremony is scheduled to begin on July 4th, 2020 at 4pm AST.
          Tune in then to watch!
        </h5>
        <YouTube videoId="2g811Eo7K8U" opts={options} onReady={this._onReady} />;
      </div>
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default App;
