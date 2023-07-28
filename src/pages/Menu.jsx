import axios from 'axios'

import { BiSearch } from 'react-icons/bi'

import cappucino from '/src/assets/product-01-free-img.png'

import { useState } from 'react'

//https://api.jikan.moe/v4/anime?q=Naruto&sfw
const Menu = () => {
    const [search, setSearch] = useState('')
    const [manga, setManga] = useState([])

    const searchManga = async()=>{
        try {
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)

            setManga(data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="container mx-auto flex flex-col tablet:flex-row mt-10 text-white">
        <div className='flex flex-col items-center flex-1 tablet:border-e-[1px] border-[rgb(198,172,150)] p-5'>
            <h1 className="text-5xl font-semibold">Coffee</h1>
            <span className='h-[1px] border-[1px] border-solid border-white mb-3 w-28'></span>
            {/* coffee container */}
            <div className='flex items-center justify-center my-5 gap-10 flex-wrap'>
                 {/* coffee 1 */}
                <div className='bg-[rgb(190,145,97)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                    <div className='w-full h-56'>
                        <img src={cappucino}/>
                    </div>
                    <div>
                        <p className='text-2xl'>&#8369;150.00</p>
                        <h1 className='text-4xl my-3'>Cappucino</h1>
                        <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                        <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(219,174,127)] hover:text-white hover:ease-out duration-300'>ORDER</button>
                    </div>
                </div>
                 {/* coffee 1 */}
                <div className='bg-[rgb(190,145,97)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                    <div className='w-full h-56'>
                        <img src={cappucino}/>
                    </div>
                    <div>
                        <p className='text-2xl'>&#8369;150.00</p>
                        <h1 className='text-4xl my-3'>Cappucino</h1>
                        <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                        <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(219,174,127)] hover:text-white hover:ease-out duration-300'>ORDER</button>
                    </div>
                </div>
                 {/* coffee 1 */}
                <div className='bg-[rgb(190,145,97)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                    <div className='w-full h-56'>
                        <img src={cappucino}/>
                    </div>
                    <div>
                        <p className='text-2xl'>&#8369;150.00</p>
                        <h1 className='text-4xl my-3'>Cappucino</h1>
                        <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                        <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(219,174,127)] hover:text-white hover:ease-out duration-300'>ORDER</button>
                    </div>
                </div>
                 {/* coffee 1 */}
                <div className='bg-[rgb(190,145,97)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                    <div className='w-full h-56'>
                        <img src={cappucino}/>
                    </div>
                    <div>
                        <p className='text-2xl'>&#8369;150.00</p>
                        <h1 className='text-4xl my-3'>Cappucino</h1>
                        <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                        <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(219,174,127)] hover:text-white hover:ease-out duration-300'>ORDER</button>
                    </div>
                </div>
                 {/* coffee 1 */}
                <div className='bg-[rgb(190,145,97)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                    <div className='w-full h-56'>
                        <img src={cappucino}/>
                    </div>
                    <div>
                        <p className='text-2xl'>&#8369;150.00</p>
                        <h1 className='text-4xl my-3'>Cappucino</h1>
                        <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                        <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(219,174,127)] hover:text-white hover:ease-out duration-300'>ORDER</button>
                    </div>
                </div>
                 {/* coffee 1 */}
                <div className='bg-[rgb(190,145,97)] drop-shadow-xl p-5 flex flex-col items-center text-center w-full smallScreen:w-96 rounded-lg text-white'>
                    <div className='w-full h-56'>
                        <img src={cappucino}/>
                    </div>
                    <div>
                        <p className='text-2xl'>&#8369;150.00</p>
                        <h1 className='text-4xl my-3'>Cappucino</h1>
                        <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem?</p>
                        <button className='bg-white text-black w-full py-3 rounded-lg drop-shadow-lg text-lg hover:bg-[rgb(219,174,127)] hover:text-white hover:ease-out duration-300'>ORDER</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full tablet:w-96 flex flex-col items-center p-5'>
            <h1 className="text-5xl font-semibold">Chapters</h1>
            <span className='h-[1px] border-[1px] border-solid border-white mb-3 w-28'></span>
            {/* manga container */}
            <div className='flex flex-row items-center w-full'>
                <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}} className='w-full p-2 border-b-[1px] bg-transparent text-white placeholder:text-white outline-none' placeholder='Search your favorite manga...'/>
                <button type='button' onClick={searchManga} className='text-2xl'>
                    <BiSearch/>
                </button>
            </div>
            {/* title suggestions container */}
            <div className='flex flex-col gap-5 mt-10 h-[100vh] overflow-auto'>
                {
                    manga.data != undefined ?
                    manga.data.map((data)=>(
                        <button onClick={()=>{console.log(data)}} key={data.mal_id} className='flex flex-row items-center gap-5 bg-[rgb(198,172,150)]'>
                            <div className='w-[10rem]'>
                                <img src={data.images.jpg.image_url} className=''/>
                            </div>
                            <div className='flex flex-col text-start flex-1 flex-wrap'>
                                <p>Title: {data.title}</p>
                                <div className='flex items-center gap-2 flex-wrap mt-3'>
                                Genre: 
                                {data.genres.map((genre,index)=>(
                                    <p key={index} className=''>
                                    {genre.name},
                                    </p>
                                ))}
                                </div>
                            </div>
                            {/* {console.log(data)} */}
                        </button>
                    ))
                    :
                    ''
                }
            </div>
        </div>
    </div>
  )
}

export default Menu