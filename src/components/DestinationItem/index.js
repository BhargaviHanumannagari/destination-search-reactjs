// Write your code here
import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  onClickUpdateSearchInput = () => {
    const {searchInfo, updateSearchInput} = this.props
    const {destination} = searchInfo
    updateSearchInput(destination)
  }

  render() {
    const {searchInfo} = this.props
    const {destination} = searchInfo
    return (
      <li className="destination-item" onClick={this.onClickUpdateSearchInput}>
        <p className="destination-text">{destination}</p>
        <img className="arrow-image" src="imgUrl" alt={name} />
      </li>
    )
  }
}

export default DestinationItem
