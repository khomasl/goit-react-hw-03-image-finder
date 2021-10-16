import { Component } from 'react'

export class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags } = this.props.image
    return (
      <li key={id} className="ImageGalleryItem">
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
