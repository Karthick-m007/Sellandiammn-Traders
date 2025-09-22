import React from 'react'
import image from "../images/clock.png"

export default function FeaturedProducts() {
    return (
        <div className=' mx-20 mt-3  md:mx-24 md:flex md:justify-center md:py-4 md:my-3 md:gap-3'>
            <div className='w-60 border p-3 mb-5'>
                <img src={image} alt="" />
                <h2>1. Anchor Roma Modular Switches</h2>
                <p><strong>Price:</strong> ₹XXX</p>
                <p><strong>Description:</strong> High-quality modular switches with sleek design, ideal for residential and commercial electrical fittings.</p>

            </div>
            <div className='w-60 border p-3 mb-5'>
                <img src={image} alt="" />
                <h2>1. Anchor Roma Modular Switches</h2>
                <p><strong>Price:</strong> ₹XXX</p>
                <p><strong>Description:</strong> High-quality modular switches with sleek design, ideal for residential and commercial electrical fittings.</p>

            </div>
            <div className='w-60 border p-3 mb-5'>
                <img src={image} alt="" />
                <h2>1. Anchor Roma Modular Switches</h2>
                <p><strong>Price:</strong> ₹XXX</p>
                <p><strong>Description:</strong> High-quality modular switches with sleek design, ideal for residential and commercial electrical fittings.</p>

            </div>
            <div className='w-60 border p-3  mb-5'>
                <img src={image} alt="" />
                <h2>1. Anchor Roma Modular Switches</h2>
                <p><strong>Price:</strong> ₹XXX</p>
                <p><strong>Description:</strong> High-quality modular switches with sleek design, ideal for residential and commercial electrical fittings.</p>

            </div>
           
        </div>
    )
}
