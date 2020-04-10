import React, { useState } from 'react'
import ContactModal from './ContactModal.js'

export default function Social(props) {
    const {image, name } = props
    //link to contact form in modal

    const [show, setShow] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [emailName, setEmailName] = useState('');
    const [email, setEmail] = useState('')
    const [thankYou, setThankYou] = useState(false)
    //sleep function 
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    //show and hide modal
    function toggleModal() {
        setShow(!show)
        setFeedback('')
        setEmailName('')
        setEmail('')
    }
    //handle submit
    function handleSubmit() {
        if (emailName === '' || email === '' || feedback === '') {
            alert('Please fill out all three fields.')
        }
        else {
            const templateId = 'template_583aTEzL';
            sendFeedback(templateId, { message_html: feedback, from_name: emailName, reply_to: email })
        }
    }
    //send email
    function sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            setThankYou(true)
            sleep(2000).then(() => {
                toggleModal()
                setThankYou(false)
            })
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err =>
                alert('Email unsuccessful. Please try again later.')
            )

    }


    return (
        <div>
            <a onClick={toggleModal}><img src={image} className='social-link' alt={name} /></a>
            <h6 className="social-subtitle">{name}</h6>

            <ContactModal
                show={show}
                closeCallback={toggleModal}
                customClass="custom_modal_class"
            >

                {!thankYou ?
                    <>
                        <h3>tdonovan79@gmail.com</h3>
                        <form className="test-mailing">
                            <h1>Contact Me</h1>
                            <div>
                                {/* name */}
                                <textarea
                                    onChange={e => setEmailName(e.target.value)}
                                    placeholder="Name"
                                    required
                                    value={emailName}
                                    style={{ width: '100%' }}
                                />
                                {/* email */}
                                <textarea
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    required
                                    value={email}
                                    style={{ width: '100%' }}
                                />

                                {/* email body */}
                                <textarea
                                    id="email-body"
                                    onChange={e => setFeedback(e.target.value)}
                                    placeholder="Body of email here..."
                                    required
                                    value={feedback}
                                    style={{ width: '100%', height: '150px' }}
                                />
                            </div>
                            <input type="button" value="Send Email" className="btn btn--submit" onClick={handleSubmit} />
                        </form>
                    </>
                    :
                    <h2>Thank you! I will get back to you soon.</h2>
                }

            </ContactModal>
        </div>
    )
}
