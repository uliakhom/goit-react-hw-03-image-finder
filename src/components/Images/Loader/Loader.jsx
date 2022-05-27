import { SpinnerInfinity } from 'spinners-react';

import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <SpinnerInfinity color="blue" size="100" />
    </div>
  );
};

export default Loader;
