import React from 'react';
import { motion } from 'framer-motion';

import image1 from '../images/legrand.png'
import image2 from '../images/water tech.png'
import image3 from '../images/finolex.avif'
import image4 from '../images/cs.png'
import image5 from '../images/sturlite.jpeg'
import image6 from '../images/rr cables.avif'
import image7 from '../images/efab.jpeg'
import image8 from '../images/million.png'
import image9 from '../images/ashirwad.png'
import image10 from '../images/lt.png'



// You can replace these with actual brand images
import legrandImg from "../images/legrand-switches.jpg";
import cromptonImg from "../images/ceiling fan interior OR industrial ventilation fan.webp";
import sturliteImg from "../images/product-jpeg.jpg";
import watertechImg from "../images/water-tec-water-tap.jpg";
import kjmImg from "../images/wires-and-cables.png";

const logos = [
    image1,
    image2,
    image3,
    image4,
    image10,
    image5,
    image6,image7,image8,image9,
];

const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
};

const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
};

export default function Brands() {
    const brands = [
        {
            name: "Legrand",
            image: legrandImg,
            description:
                "Legrand offers premium modular switches and electrical solutions combining safety, innovation, and modern design.",
        },
        {
            name: "Crompton",
            image: cromptonImg,
            description:
                "Crompton is known for high-performance fans, lighting, and home electricals with energy efficiency.",
        },
        {
            name: "Sturlite",
            image: sturliteImg,
            description:
                "Sturlite focuses on advanced LED lighting and power-efficient luminaires built for durability.",
        },
        {
            name: "WaterTech",
            image: watertechImg,
            description:
                "WaterTech delivers modern water heating and purification systems with electrical safety.",
        },
        {
            name: "Finolex",
            image: kjmImg,
            description:
                "Finolex is a trusted supplier of quality electrical wires and cables for residential and industrial use.",
        },
    ];

    return (
        <div className="mt-16 mb-6 px-4 lg:px-20 md:mx-24">

            {brands.map((brand, index) => (
                <div
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                        } items-center mb-24 gap-10`}
                >
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center"
                        variants={index % 2 === 0 ? fadeLeft : fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-96 h-80 object-cover rounded-xl shadow-lg"
                        />
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 text-center lg:text-left"
                        variants={index % 2 === 0 ? fadeRight : fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            {brand.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {brand.description}
                        </p>
                    </motion.div>
                </div>
            ))}

            {/* Scrolling logos row */}
            <div className="overflow-hidden py-8 mt-16 bg-background">
                <div className="whitespace-nowrap animate-scroll">
                    {[...logos, ...logos].map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo}
                            alt={`Logo ${idx}`}
                            className="inline-block h-12 mx-8 "
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
