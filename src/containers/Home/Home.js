import React, { Component } from 'react';
import Ratings from '../Ratings/Ratings'
import swing from '../../images/swing.svg'
import { Query } from 'react-apollo'
import gql from "graphql-tag";
import Feedback from '../Feedback/Feedback'


const GET_PLAYERS = gql`
  {
    players {
      id
      name
    }
  }
`;


class Home extends Component {
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
    const {changeFilter} = this.props
    return (
      // <Query query={GET_PLAYERS}>
      //   {({ loading, error, data }) => {
      //     if (loading) return "Loading...";
      //     if (error) return `Error! ${error.message}`;
      //     return (
      //       <select name="player">
      //         {data.players.map(player => (
      //           <option key={player.id} value={player.name}>
      //             {player.name}
      //           </option>
      //         ))}
      //       </select>
      //     );
      //   }}
      // </Query>

      <div className="home">
        <div className="club-btns">
          {
            this.clubButtons()
          }
        </div>
        <Feedback/>
        <button onClick={() => changeFilter('ratings')} className="take-shot-btn">Press After Your Shot</button>
      </div>
    );
  }
}

export default Home;
