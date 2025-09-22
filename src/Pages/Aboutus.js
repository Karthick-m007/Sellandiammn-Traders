import React from 'react'
import CountUp from '../ReactBits/CountUp'

export default function Aboutus() {
  return (
      <section className="max-w-3xl mx-auto p-6 bg-background rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-primary">About Us</h2>

          <p className="text-lg text-textPrimary mb-4">
              We are a trusted electrical shop with over{' '}
              <span className="text-primary text-2xl font-semibold">
                  <CountUp to={25} duration={2} />+
              </span>{' '}
              years of experience providing high-quality electrical products and dependable service.
          </p>

          <p className="text-lg text-textSecondary">
              From home wiring essentials to commercial-grade solutions, we offer a wide range of products
              backed by expert support and a strong focus on customer satisfaction.
          </p>
          
      </section>

  )
}
