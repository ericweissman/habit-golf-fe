import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

class Stats extends Component {
  state = {
    range: 'today',
  }

  changeRange = (e) => {  
    const { value } = e.target
    this.setState({range: value})
  }


  render() {
    return (
      <div>
        <div className="date-btns">
          <button onClick={this.changeRange} value="today">today</button>
          <button onClick={this.changeRange} value="all time">all time</button>
        </div>
        <div className="graph-area">
          <PieChart
            className="graph"
            data={[
              { title: 'One', value: 1.1, color: '#E38627' },
              { title: 'Two', value: 1.9, color: '#C13C37' },
              { title: 'Three', value: 20, color: '#6A2135' },
            ]}
          />
        </div>
        <button></button>
      </div>
    );
  }
}

export default Stats;
