import React, { Component } from 'react'; 
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import styled from 'styled-components';

type ClockState = {
  time: Date
}

const StyledDiv = styled.div`
font-family: Roboto-Bold;
font-size: 84px;
color: #37474F;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
min-height: 100vh;
`;

export default class App extends Component<{}, ClockState> {

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentWillMount() {
    this.tick();
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return <StyledDiv>{this.state.time.toLocaleTimeString()}</StyledDiv>
  }
}