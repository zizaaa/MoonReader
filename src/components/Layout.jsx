import logo from '/src/assets/moonreader.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFacebook,BsTwitter } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'


import { Link, Outlet, useLocation } from "react-router-dom"
import { useState } from 'react'

const Layout = () => {
    const location = useLocation()

    const [navOn, setNavOn] = useState(false);
    
    return (
        <main className='bg-brown'>

            <nav className='container mx-auto flex items-center flex-row mobileLarge:flex-col justify-between mb-3'>
                {/* img-container */}
                <div className="w-36">
                    <img src={logo}/>
                </div>
                {/* navigation link */}
                <div className="hidden mobileLarge:flex gap-5 text-[rgb(198,172,150)] text-lg mt-5">
                    <Link to="/" className={`${location.pathname === '/' ? 'text-white':''}`}>Home</Link>
                    <Link to="/menu" className={`${location.pathname === '/menu' ? 'text-white':''}`}>Coffee & Chapters</Link>
                    <Link to="/about" className={`${location.pathname === '/about' ? 'text-white':''}`}>About</Link>
                    <Link to="/orders" className={`${location.pathname === '/orders' ? 'text-white':''}`}>Orders</Link>
                </div>
                <button onClick={()=>{navOn ? setNavOn(false):setNavOn(true)}} className='mobileLarge:hidden flex text-2xl text-white'>
                    <GiHamburgerMenu/>
                </button>
            </nav>
            {/* dropdown menu */}
            <div className={`${navOn ? 'flex':'hidden'} mobileLarge:hidden bg-[rgb(190,145,97)] mb-3 transition duration-300 ease-in-out shadow-[1px_2px_2px_3px_inset_rgba(0,0,0,0.4)]`}>
                <div className='container mx-auto text-[rgb(198,172,150)] text-lg flex flex-col gap-5 py-10 '>
                    <Link to="/" className={`${location.pathname === '/' ? 'text-white':''}`}>Home</Link>
                    <Link to="/menu" className={`${location.pathname === '/menu' ? 'text-white':''}`}>Coffee & Chapters</Link>
                    <Link to="/about" className={`${location.pathname === '/about' ? 'text-white':''}`}>About</Link>
                    <Link to="/orders" className={`${location.pathname === '/orders' ? 'text-white':''}`}>Orders</Link>
                </div>
            </div>

            <section>
                <Outlet/>
            </section>

            <footer className='mt-20'>
                <div className='container mx-auto text-white flex flex-col mobileLarge:flex-row gap-10 text-center border-y-[1px] border-solid border-white py-10'>
                    <div className='flex flex-col items-center flex-1'>
                        <h1 className='text-2xl'>About Us</h1>
                        <p className='text-lg'>At MoonReader, we blend the magic of literature with the enchantment of coffee. Nestled under the glow of the moon, our coffee shop is a haven for book lovers and coffee connoisseurs alike. We believe that every cup of coffee holds a story, just waiting to be savored with every sip.</p>
                        <div className='flex items-center gap-5 mt-5'>
                            <span  className='text-lg'>
                                <BsFacebook/>
                            </span>
                            <span  className='text-lg'>
                                <BsTwitter/>
                            </span>
                            <span  className='text-lg'>
                                <FaInstagramSquare/>
                            </span>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h1  className='text-2xl'>Contact</h1>
                        <p  className='text-lg'>4ft Avenue, Konohagakure</p>
                        <p  className='text-lg'>+123-456-789</p>
                        <p  className='text-lg'>moonreader@gmail.com</p>
                    </div>
                    <div className='flex-1'>
                        <h1  className='text-2xl'>Opening hours</h1>
                        <p  className='text-lg'>Mon - Fri: 6am - 11pm</p>
                        <p  className='text-lg'>Sat: 6am - 6pm</p>
                        <p  className='text-lg'>Sun: 8am - 8pm</p>
                    </div>
                </div>
                <div className='text-[rgb(198,172,150)] text-center'>
                    <p>Copyright &copy; 2023 MoonReader | Powered by ziza</p>
                </div>
            </footer>
        </main>
    )
}

export default Layout