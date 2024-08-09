import React from 'react'

function Header() {

    return (
        
        <section className='w-full flex items-center justify-between px-24 py-8 '>
            
            {/* Logo Section */}
            <img src="/logo.svg" alt="Logo" />
            
            {/* Menu section */}
            <div className='flex items-center gap-12 text-white'>

                <a href="#">Marketplace</a>
                <a href="#">Rankings</a>
                <a href="#">Connect a wallet</a>

                <a className='flex gap-2 bg-callToAction px-6 py-2 rounded-xl' href="#"><img src="/user.svg" alt="" />Sign Up</a>
            </div>
        </section>
    )

}

export default Header