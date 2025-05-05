import styles from './ContactForm.module.css'

const ContactForm =()=> {
 return (
    <div>
            <label htmlFor="single-line-input">Single Line Input:</label>
            <input
                type="text"
                id="single-line-input"
                name="single-line-input"
                placeholder="Enter text"
                style={{
                width: '100%',
                padding: '8px',
                marginBottom: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                }}
            />
            
            {/* Rich text field */}
            <label htmlFor="rich-text-input">Rich Text Input:</label>
            <textarea
                id="rich-text-input"
                name="rich-text-input"
                placeholder="Enter rich text"
                rows={5}
                style={{
                width: '100%',
                padding: '8px',
                marginBottom: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontFamily: 'Arial, sans-serif',
                }}
            />
      
            <button type="submit" style={{ padding: '10px 15px', borderRadius: '5px' }}>
                Submit
            </button>
    </div>
 )
}

export default ContactForm