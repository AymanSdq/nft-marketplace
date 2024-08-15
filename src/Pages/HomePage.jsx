import React from 'react'
import Header from '../Templates/Header'

function HomePage() {

    return (
        
        <>
            <section>
                {/* Header Section */}
                <Header />
                {/* Hero Section */}
                <div className='w-full h-screen flex px-48 py-24'>
                    {/* Right section */}
                    <div className='w-2/3 flex flex-col gap-8 '>
                        <h1 className='text-4xl text-white'>Discover Digital Art & Collect NFTs</h1>
                        <p className='text-white'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <button className=' bg-callToAction text-white flex justify-center items-center py-2 w-[224px] rounded-xl'><img src='/rocket.svg' alt='Rocket' /> Get Started</button>
                        {/* auctions and sales */}
                        <div className='w-full flex justify-between'>
                            {/* first */}
                            <div className='flex flex-col'>
                                <h1 className='text-xl text-white font-bold'>240k+</h1>
                                <p className='text-white'>Total Sale</p>
                            </div>
                            {/* Second */}
                            <div className='flex flex-col'>
                                <h1 className='text-xl text-white font-bold'>240k+</h1>
                                <p className='text-white'>Total Sale</p>
                            </div>
                            {/* Third */}
                            <div className='flex flex-col'>
                                <h1 className='text-xl text-white font-bold'>240k+</h1>
                                <p className='text-white'>Total Sale</p>
                            </div>
                        </div>
                    </div>
                    {/* Left section */}
                    <div className='w-full  flex flex-col'>


                        {/* Here must go the image */}

                    </div>

                </div>

            </section>
        </>

    )

}

export default HomePage