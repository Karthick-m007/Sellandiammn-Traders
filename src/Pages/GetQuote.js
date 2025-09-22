// GetQuote.js

import React from 'react';

export default function GetQuote() {
    return (
        <section className="bg-background  text-textPrimary p-6 max-w-2xl mx-auto rounded-md shadow-sm">
            <h2 className="text-primary text-2xl font-semibold mb-4">Get a Quote</h2>
            <p className="text-textSecondary text-base">
                Interested in our products or services? Reach out to get a customized quote tailored to your needs. We’re here to help you with expert advice and competitive pricing.
            </p>


                <div class="container  mx-auto my-5 ">
                    <div class="mx-auto">
                        <div class="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                            {/* <h2 class="text-2xl font-semibold text-gray-800 mb-4">Get Quote</h2> */}
                            <form>
                                <div class="mb-4">
                                    <label class="block text-gray-800 mb-1" for="name">Your Name</label>
                                    <input
                                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                        placeholder="Enter your name"
                                        type="text"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-800 mb-1" for="email">Your Email</label>
                                    <input
                                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                        placeholder="Enter your email"
                                        name="email"
                                        id="email"
                                        type="email"
                                    />
                                </div>

                                <div class="mb-4">
                                    <label class="block text-gray-800 mb-1" for="email">Your Mobile Number</label>
                                    <input
                                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                        placeholder="EnterYour mobile number"
                                        name="mobile"
                                        id="mobile"
                                        type="tel"
                                    />
                                </div>

                                <div class="mb-4">
                                    <label class="block text-gray-800 mb-1" for="email">If any File</label>
                                    <input
                                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                        placeholder="EnterYour mobile number"
                                        name="email"
                                        id="email"
                                        type="email"
                                    />
                                </div>

                                <div class="mb-4">
                                    <label class="block text-gray-800 mb-1" for="message"
                                    >Your Message</label
                                    >
                                    <textarea
                                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                        rows="4"
                                        placeholder="Enter your message"
                                        name="message"
                                        id="message"
                                    ></textarea>
                                </div>
                                <button
                                    class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

        </section>
    );
}
