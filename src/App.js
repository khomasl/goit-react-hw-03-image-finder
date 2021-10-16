import './App.css'
import { Component } from 'react'
import { Searchbar } from './components/Searchbar/Searchbar'
import { ImageGallery } from './components/ImageGallery/ImageGallery'

class App extends Component {
  state = {
    searchValue: '',
    perPage: 12,
  }

  getSearchValues = (searchValue, perPage) =>
    this.setState({ searchValue, perPage })

  render() {
    return (
      <div className="App">
        <>
          <Searchbar getSearchValues={this.getSearchValues} />
          <ImageGallery searchValue={this.state.searchValue} />
        </>
      </div>
    )
  }
}

export default App
