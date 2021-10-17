import { Component } from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { PixabayFetch } from '../../services/pixabay'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import { notifyError } from '../notify'
import LoaderSpinner from '../Loader/Loader'

const base_url = `https://pixabay.com/api/`
const api_key = `23045990-a26bb8d890e0b5c9b60396550`
const newPixabayFetch = new PixabayFetch(base_url, api_key)

export class ImageGallery extends Component {
  state = {
    gallery: [],
    status: 'init',
    showModal: false,
    image: {},
  }

  scrolling = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })

  fetch() {
    newPixabayFetch
      .searchImages()
      .then((gallery) => {
        if (this.state.status === 'pending') {
          this.setState({ gallery })
        } else {
          this.setState((prev) => ({
            gallery: [...prev.gallery, ...gallery],
          }))
          this.scrolling()
        }

        this.setState({ status: 'success' })
      })
      .catch((err) => {
        this.setState({ status: 'error' })
        notifyError(err.message)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ status: 'pending' })
      newPixabayFetch.resetPage()
      newPixabayFetch.searchQuery = this.props.searchValue
      this.fetch()
    }
  }

  handleClick = () => {
    newPixabayFetch.page = 1
    this.fetch()
  }

  showImage = (id) => {
    const image = this.state.gallery.find(
      (image) => Number(image.id) === Number(id),
    )
    this.setState({ image })
    this.toggleModal()
  }

  handleImageClick = (e) => this.showImage(e.target.id)

  toggleModal = () => this.setState({ showModal: !this.state.showModal })

  render() {
    const { gallery, status, image, showModal } = this.state
    const { handleImageClick, handleClick, toggleModal } = this

    if (status === 'init') return <h1> </h1>

    if (status === 'pending') return <LoaderSpinner />

    if (status === 'success') {
      return (
        gallery.length > 0 && (
          <>
            <ul className="ImageGallery">
              {gallery.map((image) => (
                <ImageGalleryItem
                  image={image}
                  onClickImage={handleImageClick}
                />
              ))}
            </ul>
            <Button onClick={handleClick} />
            {showModal && <Modal image={image} toggleModal={toggleModal} />}
          </>
        )
      )
    }

    if (status === 'error') return <h1>ALARMA!!!</h1>
  }
}
