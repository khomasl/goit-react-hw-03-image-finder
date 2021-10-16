import { Component } from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export default class LoaderSpinner extends Component {
  render() {
    return (
      <Loader
        className="Loader"
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    )
  }
}
