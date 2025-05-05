import React, { useState } from 'react'
import styles from './ContactForm.module.css'

const ContactForm =()=> {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

 return (
    <div className={styles.contactUsRoot}>
        <div className={styles.contactUsContainer}>
            <label className={styles.contactUsInputLabel} htmlFor="single-line-input">Name*</label>
            <input
                type="text"
                id="single-line-input"
                name="single-line-input"
                placeholder="How do you want us to call you?"
                className={styles.contactUsInput}
            />
            
            <label className={styles.contactUsInputLabel} htmlFor="single-line-input">Email*</label>
            <input
                type="text"
                id="single-line-input"
                name="single-line-input"
                placeholder="Enter your email where we can send our replies."
                className={styles.contactUsInput}
            />

            {/* Rich text field */}
            <label className={styles.contactUsInputLabel} htmlFor="rich-text-input">Message*</label>
            <textarea
                id="rich-text-input"
                name="rich-text-input"
                placeholder="Tell us you concerns or inquiries."
                rows={5}
                className={styles.contactUsInput}
            />
      
            <button className={styles.contactUsSubmitButton} type="submit" style={{ padding: '10px 15px', borderRadius: '5px' }}>
                Submit
            </button>
        </div>
    </div>
 )
}

export default ContactForm