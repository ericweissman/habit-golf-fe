import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
import { connect } from 'react-redux';
import { handleData } from '../../thunks/handleData'
import { postShotData } from '../../queries/queries'
import { setLastShot } from '../../actions'

class Ratings extends Component {
  state = {
    loading: true,
    result: 3,
    currClub: 0,
  }

  componentDidMount() {
    const { club } = this.props
    let currClub = 0
    switch(club) {
      case 'wedges':
        currClub = 1
        break
      case 'irons':
        currClub = 2
        break
      case 'woods':
        currClub = 3
        break
    }
    this.setState({currClub})
  }

  
  updateResult = (e) => {
    const { value } = e.target
    this.setState({ result: parseInt(value) })
  }

  handleClick = () => {
    const { currClub, result} = this.state
    // this.props.handleData(setLastShot, postShotData(currClub, result))
    this.props.setLastShot(result)
    this.props.changeFilter('home')
  }


  // getQuery = () => {
  //   return {
  //     query: `
  //   mutation($clubId: Int!, $rating: Int!) {
  //     createShot( clubId: $clubId, rating: $rating ) {
  //       rating
  //       clubId
  //     }
  //   }
  // `
  //   }
  // }
  // makeMutation = () => {
  //   const ADD_SHOT = gql`
  //   mutation($clubId: Int!, $rating: Int!) {
  //     createShot( clubId: $clubId, rating: $rating ) {
  //       rating
  //       clubId
  //     }
  //   }
  // `
  //   const clubId = this.state.currClub
  //   const rating = this.state.result
  //   const { changeFilter } = this.props
  //   return (
  //     <Mutation mutation={ADD_SHOT} onCompleted={() => changeFilter('home')} variables={{ clubId, rating }}>
  //       {addShot => (
  //         <button className="save-shot" onClick={addShot}>Save Shot</button>
  //       )}
  //     </Mutation>
  //   )
  // }

  render() {
    const { changeFilter } = this.props

    return (
      <div className="ratings">
        <h2>rate your shot</h2>
        <div className="ratings-area">
          <div className="great-shot">
            <button onClick={this.updateResult} value={3}>great</button>
          </div>
          <div className="ok-shot">
            <button onClick={this.updateResult} value={2}>pull</button>
            <button onClick={this.updateResult} value={4}>push</button>
          </div>
          <div className="bad-shot">
            <button onClick={this.updateResult} value={1}>hook</button>
            <button onClick={this.updateResult} value={6}>duff</button>
            <button onClick={this.updateResult} value={5}>slice</button>
          </div>
        </div>
        {/* {
          this.makeMutation()
        } */}
        <button className="save-shot" onClick={this.handleClick}>Save Shot</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  club: state.club,
});

export const mapDispatchToProps = (dispatch) => ({
  handleData: (actionToDispatch, query) => dispatch(handleData(actionToDispatch, query)),
  setLastShot: (shot) => dispatch(setLastShot(shot))
})

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
