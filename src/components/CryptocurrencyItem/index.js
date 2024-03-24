// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = eachItem
  return (
    <li className="itemCont backgroundColor">
      <div className="logoName">
        <img src={currencyLogo} alt={currencyName} className="currencyLogo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
