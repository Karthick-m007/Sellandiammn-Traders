import React from 'react'

export default function Contact() {
  return (
    <div>
          <div class="max-w-[360px] w-full mx-auto bg-white rounded-lg shadow-md p-4">
              <h2 class="text-2xl font-semibold text-primary text-center  mb-4">Contact US</h2>              
              <form>
                  <div class="mb-4">
                      <label class="block mb-2 text-primary" for="name"> Name </label>
                      <input
                          placeholder="Your Name"
                          class="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-b-2 focus:border-secondary text-background"
                          type="text"
                          id="name"
                      />
                  </div>
                  <div class="mb-4">
                      <label class="block mb-2 text-primary" for="email"> Email </label>
                      <input
                          placeholder="Your Email"
                          class="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-b-2 focus:border-secondary text-background"
                          name="email"
                          id="email"
                          type="email"
                      />
                  </div>
                  <div class="mb-4">
                      <label class="block mb-2 text-primary" for="message"> Message </label>
                      <textarea
                          placeholder="Your Message"
                          class="w-full p-2 border-b-2 border-accent bg-transparent outline-none focus:border-b-2 focus:border-secondary text-background"
                          rows="4"
                          name="message"
                          id="message"
                      ></textarea>
                  </div>
                  <div class="mb-4">
                      <button
                          class="w-full bg-accent text-primary font-semibold p-2 rounded transition-all hover:bg-secondary"
                          type="submit"
                      >
                          Submit
                      </button>
                  </div>
              </form>
          </div>

    </div>
  )
}
