import React, { Component } from "react";

class Eightball extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { msg: "Think of a Question", color: "black" }
  }

  // Get random index 
  getRandom() {
    let randomIdx = Math.floor(Math.random() * this.props.answers.length);
    return this.props.answers[randomIdx];
  }
  // Handles click on button 
  handleClick(evt) {
    let newAns = this.getRandom();
    this.setState({ msg: newAns.msg, color: newAns.color })
  }
  
  render() {
    return (
      <div >
        <button
          onClick={this.handleClick}
          className="ball"
          style={{ backgroundColor: this.state.color }}>
          <h2> {this.state.msg} </h2>
        </button>
      </div>
    )
  }
}

export default Eightball