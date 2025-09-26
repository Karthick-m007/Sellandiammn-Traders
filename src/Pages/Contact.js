import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_4zzsgj9',    
            'template_8lxlbyz',  
            form.current,
            {
                publicKey: 'X1TJH4REUonlxfxno',
            }
        )
            .then(() => {
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div>
            <h2 className="text-3xl font-semibold text-primary text-center mb-5">Contact Us</h2>
            <div className="flex flex-wrap w-full">

                {/* Map Section */}
                <div className="w-full md:w-2/3 p-2">
                    <div style={{ width: "100%" }}>
                        <iframe
                            width="100%"
                            height="500"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=11.279876710963284,%2077.57966176455056+(Sellandiamman%20Traders)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="w-full md:w-1/3 p-2">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <form ref={form} onSubmit={sendEmail}>
                            {/* Name */}
                            <div className="mb-4">
                                <label className="block mb-2 text-primary" htmlFor="user_name">Name</label>
                                <input
                                    placeholder="Your Name"
                                    className="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-secondary text-black"
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block mb-2 text-primary" htmlFor="user_email">Email</label>
                                <input
                                    placeholder="Your Email"
                                    className="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-secondary text-black"
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-4">
                                <label className="block mb-2 text-primary" htmlFor="message">Message</label>
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-secondary text-black"
                                    rows="4"
                                    name="message"
                                    id="message"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <div className="mb-4">
                                <button
                                    className="w-full bg-accent text-primary font-semibold p-2 rounded transition-all hover:bg-secondary"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
