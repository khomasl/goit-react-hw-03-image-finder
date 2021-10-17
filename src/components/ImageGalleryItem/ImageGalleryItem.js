import { Component } from 'react'

export class ImageGalleryItem extends Component {
  handleClick = (e) => this.props.onClickImage(e)

  render() {
    const { id, webformatURL, tags } = this.props.image
    return (
      <li key={id} className="ImageGalleryItem" onClick={this.handleClick}>
        <img
          src={webformatURL}
          alt={tags}
          id={id}
          className="ImageGalleryItem-image"
        />
      </li>
    )
  }
}
