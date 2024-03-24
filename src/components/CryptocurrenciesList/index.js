// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {currencyList: [], isLoading: true}

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedList = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    this.setState({currencyList: updatedList, isLoading: false})
  }

  componentDidMount = () => {
    this.getData()
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" />
          </div>
        ) : (
          <div className="content">
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="currencyImg"
            />
            <ul className="itemsCont">
              <li className="itemCont">
                <p>Coin Type</p>
                <div className="currency">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </li>
              {currencyList.map(each => (
                <CryptocurrencyItem eachItem={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
