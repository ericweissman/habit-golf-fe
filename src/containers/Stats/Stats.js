import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';
import { connect } from 'react-redux';
import { handleData } from '../../thunks/handleData'
import { getShotDataAllTime, getShotDataToday } from '../../queries/queries'
import { getDataSuccess } from '../../actions'
import Loading from '../../components/Loading/Loading'


export class Stats extends Component {
  state = {
    range: 'today',
  }

  componentDidMount() {
    this.props.handleData(getDataSuccess, getShotDataToday(1))
  }

  changeRange = (e) => {
    const { value } = e.target
    const { range } = this.state
    this.setState({ range: value })
    if (range === 'today') {
      this.props.handleData(getDataSuccess, getShotDataAllTime(1))
    } else {
      this.props.handleData(getDataSuccess, getShotDataToday(1))
    }
  }

  displayTodayData = () => {
    const { todayGreatShotPercentage, todayHookPercentage, todayPullPercentage, todayPushPercentage, todaySlicePercentage, todayDuffPercentage } = this.props.shotData
    const data = [
      { title: 'Bad', value: todayHookPercentage + todaySlicePercentage + todayDuffPercentage, color: '#ca0032', },
      { title: 'OK', value: todayPullPercentage + todayPushPercentage, color: '#FEE715' },
      { title: 'Great', value: todayGreatShotPercentage, color: '#076652' },
    ]
    return (
      <div>
        <div className="graph-area">
          <PieChart
            className="graph"
            data={data}
            startAngle={180}
            lengthAngle={180}
            animate
          />
        </div>
        <div className='stats-breakdown'>
          <p className="ok-shots">pull <br /><span>{todayPullPercentage}%</span></p>
          <p className="great-shots">great <br /><span>{todayGreatShotPercentage}%</span></p>
          <p className="ok-shots">push <br /><span>{todayPushPercentage}%</span></p>
          <p className="bad-shots">hook <br /><span>{todayHookPercentage}%</span></p>
          <p className="bad-shots">duff <br /><span>{todayDuffPercentage}%</span></p>
          <p className="bad-shots">slice <br /><span>{todaySlicePercentage}%</span></p>
        </div>
      </div>
    )
  }

  displayAllData = () => {
    const { greatShotPercentage, hookPercentage, pullPercentage, pushPercentage, slicePercentage, duffPercentage } = this.props.shotData
    const data = [
      { title: 'Bad', value: hookPercentage + slicePercentage + duffPercentage, color: '#ca0032', },
      { title: 'OK', value: pullPercentage + pullPercentage, color: '#FEE715' },
      { title: 'Great', value: greatShotPercentage, color: '#076652' },
    ]
    return (
      <div>
        <div className="graph-area">
          <PieChart
            className="graph"
            data={data}
            startAngle={180}
            lengthAngle={180}
            animate
          />
        </div>
        <div className='stats-breakdown'>
          <p className="ok-shots">pull <br /><span>{pullPercentage}%</span></p>
          <p className="great-shots">great <br /><span>{greatShotPercentage}%</span></p>
          <p className="ok-shots">push <br /><span>{pushPercentage}%</span></p>
          <p className="bad-shots">hook <br /><span>{hookPercentage}%</span></p>
          <p className="bad-shots">duff <br /><span>{slicePercentage}%</span></p>
          <p className="bad-shots">slice <br /><span>{slicePercentage}%</span></p>
        </div>
      </div>
    )
  }

  render() {
    const { changeFilter, isLoading } = this.props
    const { range } = this.state

    return (
      isLoading ? <Loading type="bubbles" /> :
        <div className='stats'>
          <div className="date-btns">
            <button className={'active-' + (this.state.range === 'today')} disabled={range === 'today' ? true : false } onClick={this.changeRange} value="today">today</button>
            <button className={'active-' + (this.state.range === 'all time')} disabled={range === 'all time' ? true : false} onClick={this.changeRange} value="all time">all time</button>
          </div>
          {
            range === 'today' ? this.displayTodayData() : this.displayAllData()
          }
          <button className="back-btn" onClick={() => changeFilter('home')}>Back</button>
        </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  shotData: state.shotData,
  isLoading: state.isLoading,
})

export const mapDispatchToProps = (dispatch) => ({
  handleData: (actionToDispatch, query) => dispatch(handleData(actionToDispatch, query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
