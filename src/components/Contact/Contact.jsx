import React from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import CircleButton from '../CircleButton/CircleButton'; // Ensure to import your CircleButton component
import './contact.css';

const Contact = () => {
    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <section className='contact' id='contact'>
            <h2 className="text-center heading mb-0">Connect with Me</h2>
            <h5 className='mb-2'>Feel free to connect on these sites:</h5>
            <div className='icon-button-container'>
                <CircleButton icon={faFacebookF} onClick={() => handleClick('https://www.facebook.com/profile.php?id=100094263142383&mibextid=ZbWKwL')} />
                <CircleButton icon={faTwitter} onClick={() => handleClick('https://x.com/knowyourmaster_?t=kycTxpS1vGbgwZZW5Hd3yw&s=09')} />
                <CircleButton icon={faInstagram} onClick={() => handleClick('https://www.instagram.com/knowyourmaster?igsh=MXkyNm93Y3VjYnkyaA==')} />
                <CircleButton icon={faLinkedinIn} onClick={() => handleClick('https://www.linkedin.com/in/dibyojyoti-datta-13225b246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} />
            </div>
        </section>
    );
}

export default Contact;
