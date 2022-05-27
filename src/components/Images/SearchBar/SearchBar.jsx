import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './searchBar.module.css';

class SearchBar extends Component {
  state = {
    q: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      q: '',
    });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { q } = this.state;
    return (
      <header className={styles.searchbar}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            value={q}
            onChange={handleChange}
            type="text"
            name="q"
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
