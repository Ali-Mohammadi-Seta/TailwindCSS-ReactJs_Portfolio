import React from 'react'
import Food from '../assets/projects/Food.png'
import Weather from '../assets/projects/Weather.png'
import Portfolio from '../assets/projects/Portfolio.png'
import ChatRoom from '../assets/projects/ChatRoom.png'


function Work() {


    return (
        <div name='Work' className='w-full h-auto pt-40 text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div className='pb-8 text-right '>
                    <p  className=' text-4xl text-center text-grey-300 '>My <span>Projects</span></p>

                </div>
                <div className='grid  sm:grid-cols-2 gap-4 '>

                    <div  style={{backgroundImage: `url(${Food})`, backgroundSize: "cover"}} className='shadow-lg shadow-[#040c16]  text-center hover:scale-110 duration-300 '>
                        {/*Hover Effects*/}
                        <div className='opacity-0 hover:bg-gray-600/90 hover:opacity-100  '>
                        <span className='text-2xl font-bold  tracking-wider text-center'>
                         Food Website
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJS_Food' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div  style={{backgroundImage: `url(${Weather})`,  backgroundSize:"cover" }} className='shadow-lg shadow-[#040c16]  text-center hover:scale-110 duration-300 '>
                        {/*Hover Effects*/}
                        <div className='opacity-0 hover:bg-gray-600/90 hover:opacity-100  '>
                        <span className='text-2xl font-bold  tracking-wider text-center'>
                         Weather App
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJs_Weather' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div  style={{backgroundImage: `url(${Portfolio})` , backgroundSize:"contain", backgroundRepeat:"no-repeat"}} className='shadow-lg shadow-[#040c16]  text-center  hover:scale-110 duration-300'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 hover:bg-gray-600/90 hover:opacity-100  '>
                        <span className='text-2xl font-bold  tracking-wider text-center'>
                         Portfolio Website
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJs_Portfolio' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>

                        </div>
                    </div>
                    <div  style={{backgroundImage: `url(${ChatRoom})` , backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className='shadow-lg shadow-[#040c16]  text-center  hover:scale-110 duration-300'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 hover:bg-gray-600/90 hover:opacity-100  '>
                        <span className='text-2xl font-bold  tracking-wider text-center'>
                         Chat Room Website
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJs-FireBase_ChatRoom' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>

                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Work
