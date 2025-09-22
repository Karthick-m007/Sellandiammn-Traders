import React from 'react'
import image from '../images/christopher-machicoane-hurtaud-ewZkOqjl2Ys-unsplash.jpg'

import premium from "../images/favorites.png"
import product from "../images/product.png"
import fast from "../images/clock.png"
import service from "../images/customer-service.png"
import SplitText from '../ReactBits/SplitText'
import TextType from '../ReactBits/TextType'
import { motion } from 'framer-motion';
import Brands from './Brands'
import FeaturedProducts from './FeaturedProducts'
import Testimonials from './Testimonials'
import Aboutus from './Aboutus'
import GetQuote from './GetQuote'
import Contact from './Contact'




export default function Home() {
    return (
        <div className='bg-background'>
            <section className=" py-20 md:py-36  px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center">
                {/* Text Content */}


                <div className=" md:w-2/3 me-5 ">
                    {/* <h1 className="text-4xl font-bold text-gray-900"> */}

                    <div className='h-20 py-3 mt-3 flex items-center'>
                        <TextType
                            text={["Welcome To Our Shop", "Quality Electrical Wires, Cables & Fittings", "Happy Purchasing!"]}
                            className="text-3xl font-bold text-blue-600"
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </div>
                    {/* 
                        <SplitText
                            text="Quality Electrical Wires, Cables & Fittings"
                            className="text-4xl font-bold text-gray-900"
                            delay={35}
                            duration={0.5}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        // onLetterAnimationComplete={handleAnimationComplete}
                        /> */}
                    {/* Quality Electrical Wires, Cables & Fittings */}
                    {/* </h1> */}
                    {/* <p className="mt-2 text-lg text-gray-600 max-w-xl"> */}

                    <SplitText
                        text=" Premium PVC, UPVC fittings and durable cables for all your electrical needs. Trusted by professionals and homeowners alike."
                        className="mt-4 text-lg text-gray-600 max-w-xl text-start"
                        delay={20}
                        duration={0.5}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    // onLetterAnimationComplete={handleAnimationComplete}
                    />
                    {/* Premium PVC, UPVC fittings and durable cables for all your electrical needs. Trusted by professionals and homeowners alike. */}
                    {/* </p> */}
                    <div className="mt-6 flex space-x-4">
                        {/* <a
                            href="/products"
                            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Shop Now
                        </a> */}
                        <a
                            href="#getquot"
                            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                        >
                            Get a Quote
                        </a>
                    </div>

                </div>

                {/* Image */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img
                        src={image}
                        alt="Electrical wires, cables, PVC and UPVC fittings"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* section-2 */}

            <section>

                <div className='py-5 my-3'>
                    <h1 className='mb-5 text-primary text-center font-semibold text-3xl'>Why Choose ShopMate?</h1>
                    <div className='mx-16 justify-center gap-3  md:mx-24  flex flex-wrap '>
                        <div className='border rounded w-64 p-3 box bg-white box'>
                            <div className='flex justify-center'>
                                <img src={premium} alt="" className='w-24' />
                            </div>
                            <h2 className='font-bold my-2 text-xl text-primary'>Premium Quality Products</h2>
                            <p className='text-secondary'>Only certified and durable switches, wires, and fittings ensuring safety and long-lasting performance.</p>
                        </div>

                        <div className='border rounded w-64 p-3 box bg-white'>
                            <div className='flex justify-center'>
                                <img src={product} alt="" className='w-24' />
                            </div>
                            <h2 className='font-bold my-2 text-xl text-primary'>Wide Product Range
                            </h2>
                            <p className='text-secondary'>Find everything you need from switches to cables and all types of fittings in one place.</p>
                        </div>
                        <div className='border rounded w-64 p-3 box bg-white'>
                            <div className='flex justify-center'>
                                <img src={fast} alt="" className='w-24' />
                            </div>
                            <h2 className='font-bold my-2 text-xl text-primary'>Fast & Reliable Delivery
                            </h2>
                            <p className='text-secondary'>We ship your orders quickly and safely, so your projects never face delays.</p>
                        </div>
                        <div className='border rounded w-64  p-3 box bg-white'>
                            <div className='flex justify-center'>
                                <img src={service} alt="" className='w-24' />
                            </div>
                            <h2 className='font-bold my-2 text-xl text-primary'>Expert Customer Support

                            </h2>
                            <p className='text-secondary'>Our knowledgeable team is always ready to help you with any questions or concerns.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-10'>
                <div>
                    <h1 className='text-primary font-bold text-3xl text-center py-2 mt-3 mb-1'> Shop by Categories</h1>
                    <p className='text-center pb-5 text-secondary'>Explore our wide range of quality electrical products.</p>


                    <div className=' md:flex md:flex-wrap md:mx-16'>.
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="w-[80%] mx-auto md:w-[23%] border p-4 m-2"
                        >
                            {/* <div className='w-[80%]  mx-auto md:w-[23%] border p-4 m-2'> */}
                            <div className='text-2xl my-2'>🔌</div>
                            <h1 className='text-xl font-bold text-primary'>Electrical Wires</h1>
                            <p className='text-secondary mt-2'>High-quality copper and aluminum wires for residential, commercial, and industrial use.</p>

                            {/* </div> */}

                        </motion.div>

                        <div className='w-[80%] mx-auto md:w-[23%] border p-4 m-2'>
                            <div className='text-2xl my-2'>🔌</div>
                            <h1 className='text-xl font-bold text-primary'>Electrical Wires</h1>
                            <p className='text-secondary mt-2'>High-quality copper and aluminum wires for residential, commercial, and industrial use.</p>

                        </div>
                        <div className='w-[80%] mx-auto md:w-[23%] border p-4 m-2'>
                            <div className='text-2xl my-2'>🔌</div>
                            <h1 className='text-xl font-bold text-primary'>Electrical Wires</h1>
                            <p className='text-secondary mt-2'>High-quality copper and aluminum wires for residential, commercial, and industrial use.</p>

                        </div>
                        <div className='w-[80%] mx-auto md:w-[23%] border p-4 m-2'>
                            <div className='text-2xl my-2'>🔌</div>
                            <h1 className='text-xl font-bold text-primary'>Electrical Wires</h1>
                            <p className='text-secondary mt-2'>High-quality copper and aluminum wires for residential, commercial, and industrial use.</p>

                        </div>
                        <div className='w-[80%] mx-auto md:w-[23%] border p-4 m-2'>
                            <div className='text-2xl my-2'>🔌</div>
                            <h1 className='text-xl font-bold text-primary'>Electrical Wires</h1>
                            <p className='text-secondary mt-2'>High-quality copper and aluminum wires for residential, commercial, and industrial use.</p>

                        </div>
                        <div className='w-[80%] mx-auto md:w-[23%] border p-4 m-2'>
                            <div className='text-2xl my-2'>🔌</div>
                            <h1 className='text-xl font-bold text-primary'>Electrical Wires</h1>
                            <p className='text-secondary mt-2'>High-quality copper and aluminum wires for residential, commercial, and industrial use.</p>

                        </div>
                    </div>
                </div>
            </section >

            <section className='w-[80%] flex flex-col mx-auto mt-3 p-3'>
                <hr />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-primary text-center mb-2 ">Featured Products</h2>
                <p className="text-secondary text-center mb-8">Best-selling electrical products trusted by professionals.</p>

                <FeaturedProducts />
            </section>

            <section className='w-[80%] flex flex-col mx-auto mt-3 p-3'>
                <hr />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-primary text-center mb-2 mt-2">Trusted Brands</h2>
                <p className="text-secondary text-center mb-8">We partner with industry-leading brands known for safety, quality, and innovation.</p>

                <Brands />
            </section>


            <section className='w-[80%] flex flex-col mx-auto mt-3 p-3'>
                <hr />
            </section>

            <section id='getquot' className='mt-20 scroll-m-20'>
                <GetQuote />
            </section>

            <section className='w-[80%] flex flex-col mx-auto mt-3 p-3'>
                <hr />
            </section>

            <section>
                <Testimonials />
            </section>

            <section className='w-[80%] flex flex-col mx-auto mt-3 p-3'>
                <hr />
            </section>


            <section className='py-4 mt-20 scroll-m-20' id='aboutus'>
                <Aboutus />
            </section>
            <section className='w-[80%] flex flex-col mx-auto mt-3 p-3'>
                <hr />
            </section>

            <section className='mt-20 scroll-m-20' id='contact'>
                <Contact />
            </section>

            <section className='w-[80%] flex flex-col mx-auto mt-3 p-3'>
                <hr />
            </section>


        </div >
    )
}
