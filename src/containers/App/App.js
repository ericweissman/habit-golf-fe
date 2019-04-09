import React, { Component } from 'react';
import SignIn from '../../components/SignIn/SignIn'
import NewUser from '../../components/NewUser/NewUser'
import Error from '../../components/Error/Error'
import PremiumContent from '../../components/PremiumContent/PremiumContent'
import Ratings from '../Ratings/Ratings'
import Stats from '../Stats/Stats'
import Home from '../../components/Home/Home'
import { generateRandomClub } from '../../helpers/generateRandomClub'
import './App.scss';
import { connect } from 'react-redux';
import { setActiveClub } from '../../actions'

export class App extends Component {
  state = {
    user: [1],
    filter: 'home',
    newUser: false,
  }

  componentDidMount() {
    this.chooseRandomClub()
  }

  loginToDisplay = () => {
    const { newUser } = this.state
    if (!newUser) {
      return <SignIn newUser={this.toggleNewUser} />
    } else {
      return <NewUser />
    }
  }

  toggleNewUser = () => {
    this.setState({ newUser: !this.state.newUser })
  }


  chooseRandomClub = () => {
    const randomClub = generateRandomClub()
    this.props.setActiveClub(randomClub)
  }

  changeFilter = (filter) => {
    this.setState({ filter })
  }

  changeClub = (club) => {
    this.props.setActiveClub(club)
  }

  componentToDisplay = () => {
    const { filter } = this.state
    const { club } = this.props
    switch (filter) {
      case 'ratings':
        return <Ratings changeFilter={this.changeFilter} club={club} random={this.chooseRandomClub} />
      case 'stats':
        return <Stats changeFilter={this.changeFilter} />
      case 'paid':
        return <PremiumContent changeFilter={this.changeFilter} />
      default:
        return <Home changeFilter={this.changeFilter} club={club} changeClub={this.changeClub} />
    }
  }

  render() {
    const { user } = this.state
    const { error } = this.props
    return (
      <div className="App">
        <h1>habit golf</h1>
        {
          error && <Error error={error} />
        }
        {
          user.length === 0 ? this.loginToDisplay() : this.componentToDisplay()
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
