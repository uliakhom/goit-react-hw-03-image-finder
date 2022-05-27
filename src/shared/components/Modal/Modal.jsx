import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './modal.module.css';
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    const { close } = this.props;
    if (e.code === 'Escape') {
      close();
      return;
    }
    if (e.target === e.currentTarget) {
      close();
    }
  };

  render() {
    const { children } = this.props;
    const { closeModal } = this;
    return createPortal(
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  close: PropTypes.func,
};
