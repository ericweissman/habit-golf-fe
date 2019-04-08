import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleData, postData } from '../../thunks/handleData'
import { postShotData } from '../../queries/queries'
import { setLastShot, getDataSuccess } from '../../actions'

export class Ratings extends Component {
  state = {
    loading: true,
    result: 0,
    currClub: 0,
  }

  componentDidMount() {
    const { club } = this.props
    let currClub = 0
    switch (club) {
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
    this.setState({ currClub })
  }

  updateResult = (e) => {
    const { value } = e.target
    this.setState({ result: parseInt(value) })
  }

  handleClick = () => {
    const { result, currClub } = this.state
    this.props.random()
    this.props.handleData(setLastShot, postShotData(currClub, result, 1))
    this.props.changeFilter('home')
  }

  render() {
    return (
      <div className="ratings">
        <h2>rate your shot</h2>
        <div className="ratings-area">
          <div className="great-shot">
            <button className={'active-' + (this.state.result === 3)} onClick={this.updateResult} value={3}>great</button>
          </div>
          <div className="ok-shot">
            <button className={'active-' + (this.state.result === 2)} onClick={this.updateResult} value={2}>pull</button>
            <button className={'active-' + (this.state.result === 4)} onClick={this.updateResult} value={4}>push</button>
          </div>
          <div className="bad-shot">
            <button className={'active-' + (this.state.result === 1)} onClick={this.updateResult} value={1}>hook</button>
            <button className={'active-' + (this.state.result === 6)} onClick={this.updateResult} value={6}>duff</button>
            <button className={'active-' + (this.state.result === 5)} onClick={this.updateResult} value={5}>slice</button>
          </div>
        </div>
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
  postData: (query) => dispatch(handleData(query)),
  setLastShot: (shot) => dispatch(setLastShot(shot))
})

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
