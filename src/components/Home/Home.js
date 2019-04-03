import React, { Component } from 'react';
import Ratings from '../Ratings/Ratings'

class Home extends Component {
  state = {
    club: 'wedges',
  }

  changeClubs = (e) => {
    const { value } = e.target
    this.setState({
      currClub: value,
    })
  }

  componentToDisplay = () => {
    const { filter, club } = this.state
    switch(filter) {
      case 'ratings':
        return <Ratings changeFilter={this.changeFilter} club={club}/>
      default:
        return <Home />
    }
  }

  clubButtons = () => {
    const { club } = this.state
    const clubs = ['wedges', 'irons', 'woods']
    return clubs.map(club => {
      return <button className={club === club ? "club-btn-active" : "club-btn"} value={club} key={club} onClick={this.changeClubs}>{club}</button>
    })
  }

  render() {
    const {changeFilter} = this.props
    return (
      <div className="home">
        <div className="club-btns">
          {
            this.clubButtons()
          }
        </div>
        <button onClick={() => changeFilter('ratings')} className="take-shot-btn">take shot</button>
      </div>
    );
  }
}

export default Home;
