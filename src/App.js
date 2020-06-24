import React, {Component} from 'react';
import YouTube from 'react-youtube';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import './App.css';

class App extends Component{
  render(){
    console.log(process.env.REACT_APP_VIDEO_ID)
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
          The ceremony is scheduled to begin on July 4th, 2020 at 4:30pm AST.
          Tune in then to watch!
        </h5>
        {process.env.REACT_APP_YOUTUBE_VIDEO_ID &&
          <div>
            <YouTube videoId={process.env.REACT_APP_VIDEO_ID} opts={options}/>
          </div>
        }
        {process.env.REACT_APP_TWITCH_CHANNEL &&
          <div>
            <ReactTwitchEmbedVideo channel={process.env.REACT_APP_TWITCH_CHANNEL} />

          </div>
        }
        {!process.env.REACT_APP_TWITCH_CHANNEL && !process.env.REACT_APP_YOUTUBE_VIDEO_ID &&
          <div>
            <img alt={"Andrew&Jacqueline"} className="placeholder-image" src="https://cdn0.weddingwire.ca/usr/5/6/4/7/sfxb_663284.jpg"></img>
          </div>
        }
      </div>
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default App;
