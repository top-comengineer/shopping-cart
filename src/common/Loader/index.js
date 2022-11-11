import { createPortal } from 'react-dom';

import Backdrop from 'common/Backdrop';

import styles from './index.module.scss';

import LoaderImage from 'assets/images/loader.png';

const Loader = () => {
  const backdropElement = document.getElementById('backdrop');
  const overlaysElement = document.getElementById('overlays');

  return (
    <>
      {createPortal(<Backdrop />, backdropElement)}
      {createPortal(
        <div className={styles.loader_wrapper}>
          <img className={styles.loader} src={LoaderImage} alt="" />
        </div>,
        overlaysElement
      )}
    </>
  );
};

export default Loader;
