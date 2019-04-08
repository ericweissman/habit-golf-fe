import React, { Component } from 'react';
import Feedback from '../../containers/Feedback/Feedback'

export class Home extends Component {
  state = {
    currClub: 'wedges',
  }

  changeClubs = (e) => {
    const { value } = e.target
    this.props.changeClub(value)
  }

  clubButtons = () => {
    const { club } = this.props
    const clubs = ['wedges', 'irons', 'woods']
    return clubs.map(clubType => {
      return <button className={club === clubType ? "club-btn-active" : "club-btn"} value={clubType} key={clubType} onClick={this.changeClubs}>{clubType}</button>
    })
  }

  render() {
    const { changeFilter } = this.props
    return (
      <div className="home">
        <div className="club-btns">
          {
            this.clubButtons()
          }
        </div>
        <Feedback changeFilter={changeFilter}/>
        <button onClick={() => changeFilter('ratings')} className="take-shot-btn">track shot</button>
        <button onClick={() => changeFilter('stats')} className="view-stats">view stats</button>
      </div>
    );
  }
}

export default Home;
