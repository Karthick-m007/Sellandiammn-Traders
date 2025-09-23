import React from 'react'

export default function Contact() {
  return (
      <div className="flex flex-wrap w-full">
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

          <div className="w-full md:w-1/3 p-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-2xl font-semibold text-primary text-center mb-4">Contact Us</h2>
                  <form>
                      {/* Name Field */}
                      <div className="mb-4">
                          <label className="block mb-2 text-primary" htmlFor="name">Name</label>
                          <input
                              placeholder="Your Name"
                              className="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-secondary text-background"
                              type="text"
                              id="name"
                          />
                      </div>

                      {/* Email Field */}
                      <div className="mb-4">
                          <label className="block mb-2 text-primary" htmlFor="email">Email</label>
                          <input
                              placeholder="Your Email"
                              className="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-secondary text-background"
                              type="email"
                              id="email"
                          />
                      </div>

                      {/* Message Field */}
                      <div className="mb-4">
                          <label className="block mb-2 text-primary" htmlFor="message">Message</label>
                          <textarea
                              placeholder="Your Message"
                              className="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-secondary text-background"
                              rows="4"
                              id="message"
                          ></textarea>
                      </div>

                      {/* Submit Button */}
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

  )
}
