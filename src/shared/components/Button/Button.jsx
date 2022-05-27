import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
