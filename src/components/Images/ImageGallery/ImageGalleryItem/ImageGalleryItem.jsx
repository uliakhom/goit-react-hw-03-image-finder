import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <li className={styles.item}>
      <img
        onClick={onClick}
        src={webformatURL}
        alt={tags}
        className={styles.image}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
