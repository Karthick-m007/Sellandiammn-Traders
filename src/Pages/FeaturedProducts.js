import React from 'react';

import switchImg from '../images/legrand-modular-switches-500x500.webp';
import wireImg from '../images/electric wire.jpeg';
import lightImg from '../images/led ceiling lights OR energy efficient lighting.jpg';
import fanImg from '../images/ceiling fan interior OR industrial ventilation fan.webp';

export default function FeaturedProducts() {
    const products = [
        {
            title: "HIFI Roma Modular Switches",
            price: "₹199",
            description: "High-quality modular switches with sleek design, ideal for homes & offices.",
            image: switchImg,
        },
        {
            title: "Finolex Copper Electrical Wire",
            price: "₹849",
            description: "Durable and safe wires suitable for residential and commercial use.",
            image: wireImg,
        },
        {
            title: "Sturlite LED Ceiling Light",
            price: "₹499",
            description: "Energy-efficient LED lighting ideal for modern interiors.",
            image: lightImg,
        },
        {
            title: "Crompton Ceiling Fan",
            price: "₹2,150",
            description: "Stylish and powerful ceiling fan with energy-saving technology.",
            image: fanImg,
        },
    ];

    return (
        <div className='mx-6 md:mx-24 mt-4 flex flex-wrap justify-center gap-6'>
            {products.map((product, index) => (
                <div key={index} className='w-60 border p-3 rounded bg-white shadow hover:shadow-md transition duration-300'>
                    <img
                        src={product.image}
                        alt={product.title}
                        className='w-full h-36 object-cover rounded mb-3'
                    />
                    <h2 className='text-lg font-semibold text-primary mb-1'>{product.title}</h2>
                    <p className='text-sm text-secondary'>{product.description}</p>
                    <p className='mt-2 font-bold text-blue-600'>{product.price}</p>
                </div>
            ))}
        </div>
    );
}
