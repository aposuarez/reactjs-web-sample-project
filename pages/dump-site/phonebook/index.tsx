import { NextPage } from 'next'
import styles from './Phonebook.module.css'
import { useEffect, useState } from 'react'
import AddContactModal from '../../../components/Modal/AddContactModal'
import { Contact, ContactDetail } from '../../../api/supabase/actions/contacts'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { addContact, fetchContacts, deleteContact } from '../../../redux/slices/contactsSlice'
import ConfirmationModal from '../../../components/Modal/ConfirmationModal'

export type ContactDetailUpdate = {
    id: number
    updates: ContactDetail
}

const PhonebookScreen: NextPage = () => {

    const dispatch = useAppDispatch();
    const { contacts, loading, error } = useAppSelector((state) => state.contacts)
    const [contactDetailUpdate, setContactDetailUpdate] = useState<ContactDetailUpdate>(null)
    const [deleteContactId, setDeleteContactId] = useState<number>(null)
    const [openAddContactModal, setOpenAddContactModal] = useState(false)
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)

    useEffect(()=> {
        dispatch(fetchContacts())
    }, [dispatch])

    const editContact =(contact: Contact)=> {
        const contactDetail = {name: contact.name, phone_number: contact.phone_number}
        const contactDetailUpdate = {id: Number(contact.id), updates:contactDetail}
        console.log("contactDetailUpdate -",contactDetailUpdate)
        setContactDetailUpdate(contactDetailUpdate)
        setOpenAddContactModal(true)
    }

    const closeEditContact =()=> {
        setContactDetailUpdate(null)
        setOpenAddContactModal(false)
    }

    const showRemoveContact =(id: number)=> {
        setDeleteContactId(id)
        setOpenConfirmationModal(true)
    }

    const removeContact =()=> {
        dispatch(deleteContact(deleteContactId))
        setOpenConfirmationModal(false)
        setDeleteContactId(null)
    }

    const contactListItem = (data) => {
        return (
            <div key={data.id} className={styles.contactListItem}>
                <div className={styles.contactListName}>{data.name}</div>
                <div className={styles.contactListPhoneNumber}>
                    {data.phone_number}
                    <div className={styles.contactListIconGroup}>
                        <img src='/images/delete.png' alt="delete" className={styles.contactListIcon} onClick={()=>showRemoveContact(data.id)} />
                        <img src='/images/edit.png' alt="edit" className={styles.contactListIcon} onClick={()=>editContact(data)} />
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className={styles.root}>
            {/* <div className={styles.phonebookDescriptionContainer}>
                Phonebook
            </div> */}

            <div className={styles.contactListContainer}>
                <div className={styles.addContactButtonContainer}>
                    <button className={styles.addContactButton} type="submit" onClick={() => setOpenAddContactModal(true)}>
                        Add Contact
                    </button>
                </div>
                <div className={styles.contactListBody}>
                    <div className={styles.contactListItem}>
                        <div className={styles.contactListNameTitle}>Name</div>
                        <div className={styles.contactListPhoneNumberTitle}>Phone Number</div>
                    </div>
                    
                    {
                        contacts.map((data) => contactListItem(data))
                    }
                </div>
            </div>

            <AddContactModal isOpen={openAddContactModal} editableContact={contactDetailUpdate} onClose={closeEditContact} onSubmit={() => setOpenAddContactModal(false)} />
            <ConfirmationModal 
            isOpen={openConfirmationModal} 
            title='Delete Contact?'
            message='Are you sure you want to delete this contact?'
            onClose={()=>setOpenConfirmationModal(false)} 
            onConfirm={removeContact} />
        </div>
    )
}

export default PhonebookScreen