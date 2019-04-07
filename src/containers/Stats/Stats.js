import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';
import { connect } from 'react-redux';
import { handleData } from '../../thunks/handleData'
import { getShotData } from '../../queries/queries'
import { getDataSuccess } from '../../actions'
import Loading from '../../components/Loading/Loading'


export class Stats extends Component {
  state = {
    range: 'today',
  }

  componentDidMount() {
    this.props.handleData(getDataSuccess, getShotData(1))
  }

  changeRange = (e) => {
    const { value } = e.target
    this.setState({ range: value })
  }

  render() {
    const { changeFilter, isLoading } = this.props
    const { greatShotPercentage, hookPercentage, pullPercentage, pushPercentage, slicePercentage } = this.props.shotData
    const data = [
      { title: 'Hook', value: hookPercentage, color: '#ca0032', },
      { title: 'Pull', value: pullPercentage, color: '#FEE715' },
      { title: 'Great', value: greatShotPercentage, color: '#076652' },
      { title: 'Push', value: pushPercentage, color: '#FEE715' },
      { title: 'Slice', value: slicePercentage, color: '#ca0032' }]
    return (
        isLoading ? <Loading type="bubbles"/> : 
        <div className='stats'>
          <div className="date-btns">
            <button className={'active-' + (this.state.range === 'today')} onClick={this.changeRange} value="today">today</button>
            <button className={'active-' + (this.state.range === 'all time')} onClick={this.changeRange} value="all time">all time</button>
          </div>
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
            <p>hook <span>{hookPercentage}%</span></p>
            <p>great <span>{greatShotPercentage}%</span></p>
            <p>slice <span>{slicePercentage}%</span></p>
            <p>pull <span>{pullPercentage}%</span></p>
            <p>duff <span>{slicePercentage}%</span></p>
            <p>push <span>{pushPercentage}%</span></p>
          </div>
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
