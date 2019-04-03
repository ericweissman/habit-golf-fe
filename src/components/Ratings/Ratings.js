import React, { Component } from 'react';

class Ratings extends Component {
  state = {
    loading: true,
    result: 3,
  }

  componentDidMount() {
    //put Query in here?
  }

  updateResult = (e) => {
    const { value } = e.target
    this.setState({result: parseInt(value)})
  }

  render() {
    const { changeFilter } = this.props

    return (
      <div className="ratings">
        <h2>Ratings</h2>
        <div className="ratings-area">
            <div className="great-shot">
              <button onClick={this.updateResult} value={3}>Great</button>
            </div>
            <div className="ok-shot">
              <button onClick={this.updateResult} value={2}>Pull</button>
              <button onClick={this.updateResult} value={4}>Push</button>
            </div>
            <div className="bad-shot">
              <button onClick={this.updateResult} value={1}>Hook</button>
              <button onClick={this.updateResult} value={6}>Duff</button>
              <button onClick={this.updateResult} value={5}>Slice</button>
            </div>
        </div>
        <button onClick={() => changeFilter('home')}>Back</button>
      </div>
    );
  }
}

export default Ratings;
