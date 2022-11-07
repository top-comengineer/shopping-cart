import { useRef } from 'react';

import CenterModal from 'common/CenterModal';

import styles from './index.module.scss';

const AddAddressModal = ({
  toggleAddAddressModal,
  name,
  lastName,
  phoneNumber,
  address,
  zipCode,
  city,
  province,
}) => {
  const nameInput = useRef();
  const lastNameInput = useRef();
  const phoneNumberInput = useRef();
  const addressInput = useRef();
  const zipCodeInput = useRef();
  const cityInput = useRef();
  const provinceInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nameInput,
      lastNameInput,
      phoneNumberInput,
      addressInput,
      zipCodeInput,
      cityInput,
      provinceInput,
    });
  };

  return (
    <CenterModal toggleModal={toggleAddAddressModal}>
      <form id="form" className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Editar datos:</h2>
        <div className={styles.form_inputs_wrapper}>
          <label>
            <span>Nombre:</span>
            <input
              className={styles.input}
              type="text"
              placeholder="Nombre"
              required
              ref={nameInput}
              defaultValue={name}
            />
          </label>
          <label>
            <span>Apellido:</span>
            <input
              className={styles.input}
              type="text"
              placeholder="Apellido"
              required
              ref={lastNameInput}
              defaultValue={lastName}
            />
          </label>
          <label>
            <span>Teléfono:</span>
            <input
              className={styles.input}
              type="tel"
              ref={phoneNumberInput}
              defaultValue={phoneNumber ? phoneNumber : ''}
            />
          </label>
          <label>
            <span>Dirección:</span>
            <input
              className={styles.input}
              type="tel"
              ref={phoneNumberInput}
              defaultValue={phoneNumber ? phoneNumber : ''}
            />
          </label>
        </div>
        <div className={styles.button_wrapper}>
          <button form="form" className={styles.button} type="submit">
            Editar
          </button>
        </div>
      </form>
    </CenterModal>
  );
};

export default AddAddressModal;
