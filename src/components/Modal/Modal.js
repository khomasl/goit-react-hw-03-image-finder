import { Component } from 'react'
import { createPortal } from 'react-dom'

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseOrEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseOrEscape)
  }

  handleCloseOrEscape = (e) => {
    if (e.currentTarget === e.target || e.code === 'Escape') {
      this.props.toggleModal()
    }
  }

  render() {
    const { largeImageURL, tags } = this.props.image
    return createPortal(
      <div className="Overlay" onClick={this.handleCloseOrEscape}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      document.getElementById('modalRoot'),
    )
  }
}
