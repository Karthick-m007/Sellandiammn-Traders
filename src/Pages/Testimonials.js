import React from 'react'

export default function Testimonials() {
    return (
        <div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold text-primary my-2'>💬 Testimonials</h1>
                <p className='text-secondary mt-3'>What Our Customers Say</p>
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row gap-4'>

                <div className=' w-72 py-4'>
                    <span className='flex justify-center'>⭐️⭐️⭐️⭐️⭐️</span>
                    <h4 className='text-center my-3'><em>"As an electrician, I always trust [Sellandiamman Traders] for timely deliveries and quality tools."
                    </em></h4>
                    <p className='text-center'>– Deepak V., Electrical Contractor

                    </p>
                </div>
                <div className=' w-72 py-4'>
                    <span className='flex justify-center'>⭐️⭐️⭐️⭐️⭐️</span>
                    <h4 className='text-center my-3'><em>"Reliable shop with genuine products. The staff really helped me pick the right items for my home renovation!"</em></h4>
                    <p className='text-center'>– Suresh, Homeowner</p>
                </div>
                <div className=' w-72 py-4'>
                    <span className='flex justify-center'>⭐️⭐️⭐️⭐️⭐️</span>
                    <h4 className='text-center my-3'><em>"Great prices and wide variety. Saved a lot on bulk purchases for my project."
                    </em></h4>
                    <p className='text-center'>– Sneha G., Interior Designer

                    </p>
                </div>
            </div>
        </div>
    )
}
