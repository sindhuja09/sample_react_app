import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    // console.log(this.props)
  }

  tick() {
    // console.log("update" ,this.props)
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentWillUpdate() {
    // console.log("willupated")
  }

  render() {
    return (
      <div>
          Seconds: {this.state.seconds}
      </div>
    );
  }
}

export default Timer;
