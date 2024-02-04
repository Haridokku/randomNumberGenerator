// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGetRandomNumber = () => {
    const RandomNumber = this.getRandomNumber()

    this.setState({count: RandomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="randomContainer">
          <h1 className="head">Random Number</h1>
          <p className="describe">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onGetRandomNumber}
          >
            Generate
          </button>
          <p className="head">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
