import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../images/christopher-machicoane-hurtaud-ewZkOqjl2Ys-unsplash.jpg"
import image2 from "../images/christopher-machicoane-hurtaud-ewZkOqjl2Ys-unsplash.jpg"
import image3 from "../images/christopher-machicoane-hurtaud-ewZkOqjl2Ys-unsplash.jpg"


const logos = [
    "",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
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
    return (
        <div className="mt-16 mb-6 px-4 lg:px-20 md:mx-24">

            {/* Section 1 - Image Left */}
            <div className=" flex flex-col lg:flex-row items-center mb-24 gap-10">
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <img src={image1} alt="Legrand" className="w-96 h-80 object-center rounded-xl shadow-lg" />
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Legrand</h2>
                    <p className="text-gray-600 leading-relaxed">
                        "Legrand has redefined what we expect from electrical fittings. Their products combine safety, innovation,
                        and modern design — a perfect choice for homes and businesses alike."
                    </p>
                </motion.div>
            </div>

            {/* Section 2 - Image Right */}
            <div className="flex flex-col-reverse lg:flex-row items-center mb-24 gap-10">
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Legrand</h2>
                    <p className="text-gray-600 leading-relaxed">
                        "Legrand has redefined what we expect from electrical fittings. Their products combine safety, innovation,
                        and modern design — a perfect choice for homes and businesses alike."
                    </p>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <img src={image2} alt="Legrand" className="w-96 h-80 object-center rounded-xl shadow-lg" />
                </motion.div>
            </div>

            {/* Section 3 - Image Left */}
            <div className="flex flex-col lg:flex-row items-center mb-10 gap-10">
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <img src={image3} alt="Legrand" className="w-96 h-80 object-center rounded-xl shadow-lg" />
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Legrand</h2>
                    <p className="text-gray-600 leading-relaxed">
                        "Legrand has redefined what we expect from electrical fittings. Their products combine safety, innovation,
                        and modern design — a perfect choice for homes and businesses alike."
                    </p>
                </motion.div>
            </div>

            <div>
                <div className="overflow-hidden py-8 mt-16 bg-background">
                    <div className="whitespace-nowrap  animate-scroll">
                        {[...logos,...logos].map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo}
                                alt={`Logo ${idx}`}
                                className="inline-block h-12 mx-8 grayscale hover:grayscale-0 transition duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
