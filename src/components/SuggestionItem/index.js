import './index.css'

const SuggestionItem = props => {
  const {list, updateSearch} = props
  const {suggestion} = list
  const onClickUpdateSearch = () => {
    updateSearch(suggestion)
  }
  return (
    <li className="list-item">
      <p className="list-heading">{suggestion}</p>
      <button type="button" className="button" onClick={onClickUpdateSearch}>
        <img
          alt="img-arrow"
          className="img-arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
