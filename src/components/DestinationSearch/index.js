// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = destination => {
    this.setState({searchInput: destination})
  }

  onChangeInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachDestination =>
      eachDestination.destination
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <div className="input-search-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
              />
              <input
                type="search"
                className="input-search-element"
                placeholder="Search Destination"
                value={searchInput}
                onChange={this.onChangeInputSearch}
              />
            </div>
            <ul className="destination-search-items">
              {searchResult.map(eachSearch => (
                <DestinationItem
                  key={eachSearch.id}
                  searchInfo={eachSearch}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
