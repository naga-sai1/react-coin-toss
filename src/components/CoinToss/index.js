import './index.css'

import {Component} from 'react'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imageUrl: headImgUrl,
    headCount: 0,
    tailsCount: 0,
  }

  onChangeCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
        imageUrl: headImgUrl,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        imageUrl: tailImgUrl,
      }))
    }
  }

  render() {
    const {imageUrl, headCount, tailsCount} = this.state
    const total = headCount + tailsCount

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin" />
          <button type="button" onClick={this.onChangeCoinToss} className="btn">
            Toss Coin
          </button>
          <div className="details-container">
            <p className="content">Total:{total}</p>
            <p className="content">Heads:{headCount}</p>
            <p className="content">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
