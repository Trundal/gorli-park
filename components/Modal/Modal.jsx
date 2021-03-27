import styles from "./Modal.module.css";

const Modal = ({ children, closeModal }) => (
  <div className={styles.modalBG}>
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={closeModal}>
          x
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default Modal;