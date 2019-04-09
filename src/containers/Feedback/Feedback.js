import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo1 from '../../images/logo1.svg'
import swing from '../../images/swing.svg'
import { generatePraise } from '../../helpers/generatePraise'
import { generateDiss } from '../../helpers/generateDiss'


export class Feedback extends Component {
  rightFeedback = () => {
    return (
      <div className="right">
        <p>your last shot went...</p>
        <h3>RIGHT</h3>
        <p>want a swing tip?</p>
        <button onClick={() => this.props.changeFilter('paid')}className="tips-btn">get help</button>
      </div>
    )
  }

  leftFeedback = () => {
    return (
      <div className="left">
        <p>your last shot went...</p>
        <h3>LEFT</h3>
        <p>want a swing tip?</p>
        <button onClick={() => this.props.changeFilter('paid')}className="tips-btn">get help</button>
      </div>
    )
  }

  welcome = () => {
    return (
      <div className="welcome">
        <div className="motto">
          <p>better habits.</p>
          <p>better scores.</p>
        </div>
        <img src={logo1} alt="habit golf logo"/>
      </div>
    )
  }

  greatFeedback = () => {
    return (
      <div className="great">
        <h3>{generatePraise()}</h3>
        <img src={swing} alt="Perfect golf swing"/>
      </div>
    )
  }

  badFeedback = () => {
    return (
      <div className="bad">
        <h3>{generateDiss()}</h3>
        <p>want a swing tip?</p>
        <button onClick={() => this.props.changeFilter('paid')}className="tips-btn">unlock tips</button>
      </div>
    )
  }

  feedbackToDisplay = () => {
    const { lastShot } = this.props
    switch (lastShot) {
      case 1:
      case 2:
        return this.leftFeedback()
      case 3:
        return this.greatFeedback()
      case 4:
      case 5:
        return this.rightFeedback()
      case 6:
        return this.badFeedback()
      default:
        return this.welcome()
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
