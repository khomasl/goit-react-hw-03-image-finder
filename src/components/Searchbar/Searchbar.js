import { Component } from 'react'

const INITIAL_STATE = {
  searchValue: '',
  perPage: 12,
}

export class Searchbar extends Component {
  state = { ...INITIAL_STATE }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { searchValue, perPage } = this.state
    this.props.getSearchValues(searchValue, perPage)
    this.resetForm()
  }

  resetForm = () => this.setState({ ...INITIAL_STATE })

  render() {
    const { handleChange, handleSubmit } = this

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="searchValue"
            value={this.state.searchValue}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
}
