// GetQuote.js

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { image } from 'framer-motion/client';

export default function GetQuote() {
    const form = useRef();

    const [getquot, setGetQuot] = useState({
        name: "",
        email: "",
        image: "",
        mobilenumber: "",
        message: ""
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        image: "",
        mobilenumber: "",
        message: ""
    });

    const fullnamereg = /^[A-Za-z\s]*$/;
    const emailreg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const mobile = /^[0-9]{10}$/;
    const url = process.env.REACT_APP_URL
    console.log(url)
    function handlesubmit(e) {
        e.preventDefault();







        let errors = {};
        let isvalid = true;

        // Name validation
        if (!getquot.name ||getquot.name.trim() === "") {
            errors.name = "Enter your name";
            isvalid = false;
        } else if (!fullnamereg.test(getquot.name.trim())) {
            errors.name = "Name must contain only letters and spaces";
            isvalid = false;
        }

        // Email validation
        if (!getquot.email ||getquot.email.trim() === "") {
            errors.email = "Enter your email";
            isvalid = false;
        } else if (!emailreg.test(getquot.email.trim())) {
            errors.email = "Email must end with @gmail.com";
            isvalid = false;
        }

        // Mobile number validation
        if (!getquot.mobilenumber ||getquot.mobilenumber.trim() === "") {
            errors.mobilenumber = "Mobile number is required";
            isvalid = false;
        } else if (!mobile.test(getquot.mobilenumber.trim())) {
            errors.mobilenumber = "Mobile number must be 10 digits";
            isvalid = false;
        }

        setError(errors);

        if (!isvalid) return;

        setGetQuot({
            name: "",
            email: "", image: "",
            mobilenumber: "",
            message: "",
            image:""
        })

        // Submit with EmailJS
        // emailjs
        //     .sendForm('service_4zzsgj9', 'template_8lxlbyz', form.current, {
        //         publicKey: 'X1TJH4REUonlxfxno',
        //     })
        //     .then(() => {
        //         console.log('SUCCESS!');
        //         alert("Quote sent successfully!");

        //         setGetQuot({
        //             name: "",
        //             email: "",
        //             mobilenumber: "",
        //             message: ""
        //         });
        //     })
        //     .catch((error) => {
        //         console.log('FAILED...', error.text);
        //         alert("Something went wrong!");
        //     });




        const formdata = new FormData()
        formdata.append("name", getquot.name)
        formdata.append("email", getquot.email)
        formdata.append("mobilenumber", getquot.mobilenumber)
        formdata.append("image", getquot.image)
        formdata.append("message", getquot.message)

    
        fetch(`${url}quote`, {
            method: "POST",
            credentials: 'include',
            body: formdata
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert(data.message)
            })
            .catch(err => console.log("error in frontend quot", err))
    }

    function handlechange(e) {
        const { name, value, files } = e.target;

        // Mobile number restriction: digits only, max 10
        if (name === 'mobilenumber') {
            if (!/^\d*$/.test(value)) return;
            if (value.length > 10) return;
        }

        if (name === 'image') {
            setGetQuot({
                ...getquot,
                [name]:files[0]
            })
            return
        }

        setGetQuot({
            ...getquot,
            [name]: value
        });

    }

    return (
        <section className="bg-background text-textPrimary p-6 max-w-2xl mx-auto rounded-md shadow-sm">
            <h2 className="text-primary text-2xl font-semibold mb-4">Get a Quote</h2>
            <p className="text-textSecondary text-base mb-4">
                Interested in our products or services? Reach out to get a customized quote tailored to your needs.
            </p>

            <div className="container mx-auto my-5">
                <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                    <form ref={form} onSubmit={handlesubmit} encType="multipart/form-data">
                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1">Your Name <span className="text-red-600">*</span></label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your name"
                                type="text"
                                name="name"
                                value={getquot.name}
                                onChange={handlechange}
                            />
                            {error.name && <p className="text-red-600 mt-1 text-sm">{error.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1">Your Email <span className="text-red-600">*</span></label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                                value={getquot.email}
                                onChange={handlechange}
                            />
                            {error.email && <p className="text-red-600 mt-1 text-sm">{error.email}</p>}
                        </div>

                        {/* Mobile Number */}
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1">Your Mobile Number <span className="text-red-600">*</span></label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your mobile number"
                                type="text"
                                name="mobilenumber"
                                value={getquot.mobilenumber}
                                onChange={handlechange}
                            />
                            {error.mobilenumber && <p className="text-red-600 mt-1 text-sm">{error.mobilenumber}</p>}
                        </div>

                        {/* File Upload */}
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1">If any File</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg"
                                type="file"
                                name="image"
                                accept="image/*"

                                onChange={handlechange}
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1">Your Message</label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                rows="4"
                                placeholder="Enter your message"
                                name="message"
                                value={getquot.message}
                                onChange={handlechange}
                            />
                        </div>

                        <button
                            className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
