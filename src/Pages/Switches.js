// SwitchesShowcase.js
import React from 'react';
import image1 from "../images/modularswitches.jpg"

const products = [
 
    {
        name: 'Modular Switches',
        description: 'Elegant and durable modular switches for modern interiors.',
        image: image1, 
    },
    {
        name: 'Classic Toggle Switches',
        description: 'Reliable traditional toggle switches for all environments.',
        image: '/images/classic-toggle.jpg',
    },
    {
        name: 'Smart WiFi Switches',
        description: 'Control lights remotely with WiFi-enabled smart switches.',
        image: '/images/smart-wifi.jpg',
    },
    {
        name: 'Designer Switch Panels',
        description: 'Stylish panels to elevate the look of your space.',
        image: '/images/designer-panel.jpg',
    },
    {
        name: 'Universal Sockets',
        description: 'Multi-format sockets for global device compatibility.',
        image: '/images/universal-socket.jpg',
    },
    
    {
        name: 'Legrand MCBs',
        description: 'Reliable Miniature Circuit Breakers (MCBs) for electrical safety.',
        image: '/images/legrand-mcb.jpg', 
    },
    {
        name: 'L&T MCBs',
        description: 'Durable MCBs from L&T, ideal for industrial and residential use.',
        image: '/images/lt-mcb.jpg', 
    },
    
    {
        name: 'Kundan Premium Switches',
        description: 'High-quality switches from Kundan, known for durability and style.',
        image: '/images/kundan-switch.jpg', 
    },
    {
        name: 'Newwood Switches',
        description: 'Elegant and modern switches from Newwood for a stylish interior.',
        image: '/images/newwood-switch.jpg', 
    },
    {
        name: 'Legrand Designer Switches',
        description: 'Sophisticated Legrand switches designed for both form and function.',
        image: '/images/legrand-switch.jpg', 
    },
];


export default function SwitchesShowcase() {
    return (
        <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-24 mt-24 scroll-m-24">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">
                Switches & Sockets
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                            {/* Optional CTA button */}
                            {/* <button className="mt-4 text-blue-600 hover:underline">View More</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
