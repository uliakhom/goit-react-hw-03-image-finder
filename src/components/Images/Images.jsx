import { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Modal from 'shared/components/Modal';
import Button from 'shared/components/Button';
import Loader from './Loader';

import styles from './images.module.css';
class Images extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    q: '',
    page: 1,
    isModalOpen: false,
    modalBody: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;
    if (q !== prevState.q || page > prevState.page) {
      this.setState({
        loading: true,
        error: null,
      });

      try {
        const items = await axios.get(
          `https://pixabay.com/api/?q=${q}&page=${page}&key=27146874-6a4ead2ef4bbc8421b81b25a7&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState(prevState => {
          return {
            items: [...prevState.items, ...items.data.hits],
            loading: false,
          };
        });
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }
  }

  setSearch = ({ q }) => {
    this.setState({
      q,
      page: 1,
      items: [],
    });
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  showModal = ({ largeImageURL, tags }) => {
    this.setState({
      isModalOpen: true,
      modalBody: {
        url: largeImageURL,
        tags: tags,
      },
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { loading, items, isModalOpen, modalBody } = this.state;
    const { setSearch, loadMore, showModal, closeModal } = this;

    return (
      <>
        <SearchBar onSubmit={setSearch} />
        {!loading && Boolean(items.length) && (
          <ImageGallery items={items} onClick={showModal} />
        )}
        {!loading && Boolean(items.length) && (
          <div className={styles.buttonContainer}>
            <Button onClick={loadMore} text="Load more" />
          </div>
        )}
        {loading && <Loader />}
        {isModalOpen && (
          <Modal close={closeModal}>
            <img src={modalBody.url} alt={modalBody.tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default Images;
