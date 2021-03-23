import styles from './Modal.module.css'

export default ({children, closeModal}) => 

<div className={styles.modalBG}>
    <div className={styles.modalWrapper}>
        <div className={styles.modal}>
            <div className={styles.close} onClick={closeModal}>x</div>
            {children}
        </div>    
    </div>
</div>