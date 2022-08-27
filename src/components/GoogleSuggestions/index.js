import './index.css'

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchList: ''}

  onChangeSearch = event => {
    this.setState({searchList: event.target.value})
  }

  updateSearch = suggestion => {
    this.setState({searchList: suggestion})
  }

  render() {
    const {searchList} = this.state
    const {suggestionsList} = this.props
    const result = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchList.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="img-google"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="card-sub">
          <div className="search-card">
            <img
              className="img-search"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="input"
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeSearch}
              value={searchList}
            />
          </div>
          <ul>
            {result.map(each => (
              <SuggestionItem
                list={each}
                updateSearch={this.updateSearch}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
