import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { mapStateToProps } from '../Feedback/Feedback';
import {hook} from './ShotFeedback'
import { throwServerError } from 'apollo-link-http-common';


class Feedback extends Component {
  rightFeedback = () => {
    return (
      <div className="right">
        <p>your last shot went...</p>
        <h3>RIGHT</h3>
        <p>want a swing tip?</p>
        <button className="tips-btn">get help</button>
      </div>
    )
  }

  leftFeedback = () => {
    return (
      <div className="left">
        <p>your last shot went...</p> 
        <h3>LEFT</h3>
        <p>want a swing tip?</p>
        <button className="tips-btn">get help</button>
      </div>
    )
  }

  welcome = () => {
    return (
      <div className="welcome">
        <div className="motto">
          <p>good habits.</p>
          <p>better scores.</p>
        </div>
      <p>perform preshot routine.</p>
      <p>take your shot.</p>
      <p>track your progress.</p>
      <p>play better golf.</p>

      </div>
    )
  }

  greatFeedback = () => {
    const praises = ['wow', 'impressive', 'great shot', 'superb', 'excellent', 'bravo']
    const feedback = praises[Math.floor(Math.random() * praises.length)]
    return (
      <div className="great">
        <h3>{feedback}</h3>
      </div>
    ) 
  }

  badFeedback = () => {
    const jabs = ['oof', 'woof', 'yeesh', 'yikes', 'yuck', 'not great', 'oh no', 'sheesh', 'hmmm']
    const feedback = jabs[Math.floor(Math.random() * jabs.length)]
    return (
      <div className="bad">
        <h3>{feedback}</h3>
        <p>want a swing tip?</p>
        <button className="tips-btn">unlock tips</button>
      </div>
    )
  }



  feedbackToDisplay = () => {
    const {lastShot} = this.props
    switch(lastShot) {
      case 0:
        return this.welcome()
        break
      case 1:
      case 2:
        return this.leftFeedback()
        break
      case 3:
        return this.greatFeedback()
        break
      case 4:
      case 5:
        return this.rightFeedback()
        break
      case 6:
        return this.badFeedback()
        break
    }
  }

  render() {
    return (
      <div className="feedback">
        {
          this.feedbackToDisplay()
        }
      </div>

    );
  }
}


export const mapStateToProps = (state) => ({
  lastShot: state.lastShot,
})

export default connect(mapStateToProps)(Feedback);
