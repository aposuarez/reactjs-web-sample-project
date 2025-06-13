import styles from './ConfirmationModal.module.css'

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, title, message, onClose, onConfirm }) => {

    if (!isOpen) return null;

    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <button onClick={onClose} className={styles.closeButton}>
                ✕
                </button>
                <div className={styles.confirmationTitle}>{title}</div>
                <div className={styles.confirmationMessage}>{message}</div>
                
                <span>
                    <button className={styles.cancelButton} type="submit" onClick={onClose}>
                        Cancel
                    </button>
                    <button className={styles.confirmButton} type="submit" onClick={onConfirm}>
                        Confirm
                    </button>
                </span>
            </div>
        </div>
    )
}

export default ConfirmationModal