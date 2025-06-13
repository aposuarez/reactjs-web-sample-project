import React, { useEffect, useState } from 'react';
import styles from './AddContactModal.module.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addContact, updateContact, } from '../../../redux/slices/contactsSlice';
import { ContactDetailUpdate } from '../../../pages/dump-site/phonebook';

interface ModalProps {
  isOpen: boolean;
  editableContact: ContactDetailUpdate;
  onClose: () => void;
  onSubmit: () => void;
}

const AddContactModal: React.FC<ModalProps> = ({ isOpen, editableContact, onClose, onSubmit }) => {

  const dispatch = useAppDispatch()
  const [contactName, setContactName] = useState('')
  const [contactPhoneNumber, setContactPhoneNumber] = useState('')

  useEffect(()=>{
    if(editableContact != null) {
      console.log('editableContact -> ',editableContact)
      const contactDetail = editableContact.updates
      setContactName(contactDetail.name)
      setContactPhoneNumber(contactDetail.phone_number)
    }
  },[])
  
  const submitAddContact =()=> {
    if (contactName != '' && contactPhoneNumber != '') {
      const newContact = { name: contactName, phone_number: contactPhoneNumber}
      if(editableContact !=null) {
        dispatch(updateContact(editableContact))
      }
      else dispatch(addContact(newContact))
    }

    onSubmit()
  }

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
        
        <div className={styles.modalInputContainer}>
            <div className={styles.modalInputLabel}>Name</div>
            <input
                type="text"
                id="single-line-input"
                name="single-line-input"
                placeholder="John Doe"
                className={styles.modalInput}
                value={contactName}
                onChange={(e)=>setContactName(e.target.value)}
            />
            
            <div className={styles.modalInputLabel}>Phone Number</div>
            <input
                type="text"
                id="single-line-input"
                name="single-line-input"
                className={styles.modalInput}
                value={contactPhoneNumber}
                onChange={(e)=>setContactPhoneNumber(e.target.value)}
            />

            <button className={styles.modalButton} type="submit" onClick={submitAddContact}>
                Add Contact
            </button>
        </div>
      </div>
    </div>
  );
};

export default AddContactModal;
