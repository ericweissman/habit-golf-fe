import React, { Component } from 'react';
import Login from '../Login/Login'
import NewUser from '../NewUser/NewUser'
import Ratings from '../Ratings/Ratings'
import Stats from '../Stats/Stats'
import Home from '../Home/Home'
import './App.scss';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import { connect } from 'react-redux';
import { setActiveClub } from '../../actions'

class App extends Component {
  state = {
    user: [1],
    filter: 'home',
    // club: 'wedges',
  }

  componentDidMount() {
    this.chooseRandomClub()
  }
  
  chooseRandomClub = () => {
    const clubs = ['wedges', 'irons', 'woods']
    const randomClub = clubs[Math.floor(Math.random() * clubs.length)]
    this.props.setActiveClub(randomClub)
  }

  changeFilter = (filter) => {
    this.setState({ filter }, this.chooseRandomClub())
  }

  changeClub = (club) => {
    this.props.setActiveClub(club)
  }

  componentToDisplay = () => {
    const { filter } = this.state
    const { club } = this.props
    switch (filter) {
      case 'ratings':
        return <Ratings changeFilter={this.changeFilter} club={club}/>
      default:
        return <Home changeFilter={this.changeFilter} club={club} changeClub={this.changeClub} />
    }
  }

  render() {
    const { user } = this.state
    return (
      <div className="App">
        <h1>habit golf</h1>
        {
          user.length === 0 ? <Login /> : this.componentToDisplay()
        }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
  club: state.club,
});


export const mapDispatchToProps = (dispatch) => ({
  setActiveClub: (club) => dispatch(setActiveClub(club))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
