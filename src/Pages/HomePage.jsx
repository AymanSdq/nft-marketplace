import React from 'react'
import Header from '../Templates/Header'

function HomePage() {

    return (
        
        <>
            <section>
                {/* Header Section */}
                <Header />
                {/* Hero Section */}
                <div className='w-full h-screen flex px-48'>
                    {/* Right section */}
                    <div className='w-1/2 flex flex-col gap-8'>
                        <h1 className='text-4xl text-white'>Discover Digital Art & Collect NFTs</h1>
                        <p className='text-white'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                    </div>
                    {/* Left section */}
                    <div className='w-1/2 flex flex-col'>

                    </div>

                </div>

            </section>
        </>

    )

}

export default HomePage