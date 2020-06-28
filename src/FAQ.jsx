import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class FAQ extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      plusMinus: '+'
    }
  }

  switchSymbol(){
    if(this.state.plusMinus === '+'){
      this.setState({
        plusMinus: '-'
      })
    }
    else{
      this.setState({
        plusMinus: '+'
      })
    }
  }
  render(){
    return(
      <div className="faq">
        <Accordion>
          <Card className="cardStyle">
            <Card.Header>
              <Accordion.Toggle  as={Card.Header} variant="link" eventKey="0" onClick={this.switchSymbol.bind(this)}>
                Frequently Asked Questions <span className="bold">{this.state.plusMinus}</span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h6>1) All I See is a Picture of the Happy Couple</h6>
                <p className="questionBody">
                  We will be starting the stream at 4:00pm AST on July 4th 2020, if you are seeing the picture after that
                  time, try refreshing the page. If that does not work, Andrew may be running a few minutes late. Keep trying to refresh 
                  and we'll get the stream started ASAP!
                </p>
                <h6>2) I See a Video Player, but No Stream</h6>
                <p className="questionBody">
                  If the video player is present on your screen, we have enabled the player but may not have started the stream
                  Make sure the video is playing (i.e. not on pause) or the player will not be able to detect the stream has started.
                </p>
                <h6>3) What Time Does the Stream Start?</h6>
                <p className="questionBody">
                  We will be starting the stream at 4:00pm AST (or earlier) but the ceremony will start at 4:30pm AST.
                </p>
                <h6>4) Why Don't the Groomsmen Match?</h6>
                <p className="questionBody">
                  Hey now, We're trying our best.
                </p>
                <h6>5) I Hit Play But I Only See a Loading Icon...</h6>
                <p className="questionBody">
                  You're in a great spot! Keep the player the way it is and it should start playing as soon as we start the stream.
                </p>
                <h6>6) The Stream Cut Out!</h6>
                <p className="questionBody">
                  We are really hoping this doesn't happen but if it does, we will be recording the ceremony as well as streaming.
                  We will post the resulting video to the site for a few days after the big day!
                </p>
                <h6>7) Are You Recording This?</h6>
                <p className="questionBody">
                  We will be recording the ceremony and posting the video on the site for a few days after the big day, Andrew might
                  be a bit delayed in doing this, you know, with being newly married and everything. But he'll try to get it up ASAP.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default FAQ