// Write your code here
import React from 'react'
import './index.css'

class StopWatch extends React.Component {
  state = {timeInSeconds: 0}

  runTime = () =>
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))

  onStart = () => {
    this.timerId = setInterval(() => {
      this.runTime()
    }, 1000)
  }

  pauseTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () =>
    this.setState(() => {
      clearInterval(this.timerId)
      return {timeInSeconds: 0}
    })

  displayTime = () => {
    const {timeInSeconds} = this.state
    const minutes =
      parseInt(timeInSeconds / 60) < 10
        ? `0${parseInt(timeInSeconds / 60)}`
        : parseInt(timeInSeconds / 60)
    const seconds =
      parseInt(timeInSeconds % 60) < 10
        ? `0${parseInt(timeInSeconds % 60)}`
        : parseInt(timeInSeconds % 60)
    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <div className="container">
        <div className="stop-watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="stopwatchimg"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="display-time">{this.displayTime()}</h1>
            <div className="button-container">
              <button type="button" className="btn btn" onClick={this.onStart}>
                Start
              </button>
              <button
                type="button"
                className="btn btn"
                onClick={this.pauseTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn btn"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
