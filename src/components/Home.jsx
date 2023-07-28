import { AiOutlinePlayCircle } from 'react-icons/ai'
import { FaChevronRight } from 'react-icons/fa'

import heroImg from '/src/assets/hero-002-free-img.png'
import cappucino from '/src/assets/product-01-free-img.png'
import cafeLatte from '/src/assets/product-02-free-img.png'
import darkCoffee from '/src/assets/product-03-free-img.png'
import bookHome from '/src/assets/Kimi-no-na-wa-blu-ray.webp'
import tinapay from '/src/assets/Basket-with-croissants-on-transparent-background-PNG.png'

import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="">
        {/* hero section */}
        <div className="flex items-center flex-col container mx-auto tablet:flex-row">
          {/* left side text */}
          <div className="flex-1 text-white">
            <h1 className='text-5xl'>Welcome!</h1>
            <h2 className='text-5xl'>to our literary oasis, where each sip fuels your imagination and every page turn is a delightful escape.</h2>
          
          {/* button container */}
            <div className='flex items-center gap-2 mt-10'>
                <Link to='/menu'  className='text-4xl'>
                  <AiOutlinePlayCircle/>
                </Link>
                <p>
                  High quality in every cup of coffee we serve...
                </p>
            </div>

          </div>
          {/* right side img */}
          <div className="flex-1 flex items-center justify-center">
            <img src={heroImg}/>
          </div>
        </div>

        {/* Drinks section */}
        <div className='container mx-auto flex flex-col items-center'>
          {/* header */}
          <div className='flex flex-col items-center text-center text-white'>
              <h2 className='text-4xl font-semibold'>Drinks</h2>
              <span className='h-[1px] border-[1px] border-solid border-white w-[4rem] mb-3'></span>
              <p className='text-gray w-2/3'>Delicious drinks made with the finest ingredients, sustainability and ethical sourcing in mind. From coffee to iced tea and smoothies, we have something for everyone.</p>
              <Link to='/menu' className='flex items-center gap-1 mt-5 text-gray hover:text-white'>
                Menu
                <span>
                  <FaChevronRight/>
                </span>
              </Link>
          </div>

          {/* coffe container */}
          <div className='mx-5 mt-5 flex items-center justify-center gap-5 flex-wrap'>
              {/* coffee 1 */}
              <div className='bg-[rgb(190,145,97)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                  <div className='w-full h-56'>
                    <img src={cappucino}/>
                  </div>
                  <div>
                    <p className='text-2xl'>&#8369;150.00</p>
                    <h1 className='text-4xl my-3'>Cappucino</h1>
                    <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                    <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(219,174,127)] hover:text-white hover:ease-out duration-300'>Menu</button>
                  </div>
              </div>
              {/* coffee 2 */}
              <div className='bg-[rgb(117,144,120)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                  <div className='w-full h-56'>
                    <img src={cafeLatte}/>
                  </div>
                  <div>
                    <p className='text-2xl'>&#8369;150.00</p>
                    <h1 className='text-4xl my-3'>Cafe Latte</h1>
                    <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                    <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(131,161,135)] hover:text-white hover:ease-out duration-300'>Menu</button>
                  </div>
              </div>
              {/* coffee 3 */}
              <div className='bg-[rgb(43,37,35)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                  <div className='w-full h-56'>
                    <img src={darkCoffee}/>
                  </div>
                  <div>
                    <p className='text-2xl'>&#8369;150.00</p>
                    <h1 className='text-4xl my-3'>Dark Coffee</h1>
                    <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                    <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(56,50,48)] hover:text-white hover:ease-out duration-300'>Menu</button>
                  </div>
              </div>
          </div>

          {/* Croissants */}
          <div className='flex items-center flex-col-reverse tablet:flex-row mt-5'>
            <div className='flex-1 flex items-center justify-center'>
              <img src={tinapay}/>
            </div>
            <div className='flex flex-col flex-1 text-white'>
              <p  className='text-3xl text-gray mb-3'>From &#8369;20.00</p>
              <h1  className='text-4xl'>Croissants</h1>
              <span className='h-[1px] border-[1px] border-solid border-white mb-3 w-28'></span>
              <h2 className='text-3xl'>Elevate your coffee experience</h2>
              <p  className='text-xl me-3'>with our delectable croissants. Baked fresh daily and made with the finest ingredients, our croissants are the perfect addition to your morning coffee or midday break. Choose from a variety of classic and seasonal flavors, and savor every delicious bite at our coffee shop.</p>

              <Link to='/menu' className='flex items-center gap-2 mt-5'>
                Menu 
                <span><FaChevronRight/></span>
              </Link>
            </div>
          </div>

          {/* iced coffee container */}
          <div className='mt-5 flex flex-col tablet:flex-row items-center bg-[rgb(176,144,120)] p-10 rounded-3xl drop-shadow-xl gap-10'>
            <div className='text-white flex flex-col flex-1'>
              <p className='text-3xl text-gray mb-3'>Coffee & Chapters</p>
              <h1 className='text-4xl'>Manga</h1>
              <span className='h-[1px] border-[1px] border-solid border-white mb-3 w-16'></span>
              <p className='text-xl'>Step into the enchanting realm of 'Kimi no Na wa' at our anime-inspired coffee sanctuary, where the magic of storytelling intertwines with the tantalizing aromas of freshly brewed coffee. Like the extraordinary journey depicted in the anime, our coffee shop invites you to embark on an unforgettable adventure filled with heartwarming moments and delightful flavors.</p>

              <Link to='/menu' className='flex items-center gap-2 mt-5'>
              Manga 
                <span><FaChevronRight/></span>
              </Link>
            </div>
            <div className='flex-1 flex items-center justify-center'>
              <img src={bookHome}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home