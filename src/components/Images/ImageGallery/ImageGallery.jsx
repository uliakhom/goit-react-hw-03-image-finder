import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

import styles from './imageGallery.module.css';

const ImageGallery = ({ items, onClick }) => {
  const elements = items.map(({ id, largeImageURL, webformatURL, tags }) => (
    <ImageGalleryItem
      key={id}
      onClick={() => onClick({ largeImageURL, tags })}
      webformatURL={webformatURL}
      tags={tags}
    />
  ));
  return <ul className={styles.gallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  onClick: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
};
