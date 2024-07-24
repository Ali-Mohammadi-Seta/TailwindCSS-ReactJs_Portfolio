
import React from 'react'
import Food from '../assets/projects/Food.png'
import Weather from '../assets/projects/Weather.png'
import Portfolio from '../assets/projects/Portfolio.png'
// import ChatRoom from '../assets/projects/ChatRoom.png'
import Crypto from '../assets/projects/Crypto.png'
import Ecommerce from '../assets/projects/Ecommerce.png'


function Work() {


    return (
        <div name='Work' className='w-full h-auto pt-40 text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div className='pb-20 text-right '>
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
                                <a href='https://alifood-react.vercel.app' target="_blank">
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
                                <a href='https://weather-reduxali.vercel.app/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Ali-Mohammadi-Seta/Weather_App' target="_blank">
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
                                <a href='https://aliportfolio-react.vercel.app' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJs_Portfolio' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>

                        </div>
                    </div>
                    {/*<div  style={{backgroundImage: `url(${ChatRoom})` , backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className='shadow-lg shadow-[#040c16]  text-center  hover:scale-110 duration-300'>*/}
                    {/*    /!*Hover Effects*!/*/}
                    {/*    <div className='opacity-0 hover:bg-gray-600/90 hover:opacity-100  '>*/}
                    {/*    <span className='text-2xl font-bold  tracking-wider text-center'>*/}
                    {/*     Chat Room Website*/}
                    {/*    </span>*/}
                    {/*        <div className='pt-8 text-center'>*/}
                    {/*            <a href='https://alichat-room-react.vercel.app' target="_blank">*/}
                    {/*                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>*/}
                    {/*            </a>*/}
                    {/*            <a href='https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJs-FireBase_ChatRoom' target="_blank">*/}
                    {/*                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Code</button>*/}
                    {/*            </a>*/}

                    {/*        </div>*/}

                    <div  style={{backgroundImage: `url(${Crypto})` , backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className='shadow-lg shadow-[#040c16]  text-center  hover:scale-110 duration-300'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 hover:bg-gray-600/90 hover:opacity-100  '>
                        <span className='text-2xl font-bold  tracking-wider text-center'>
                         Crypto Tracker Website
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='https://alicrypto-react.vercel.app' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJS_Crypto' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>


                        </div>
                    </div>

                    <div  style={{backgroundImage: `url(${Ecommerce})` , backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className='h-[200px] shadow-lg shadow-[#040c16]  text-center  hover:scale-110 duration-300'>
                        {/*Hover Effects*/}
                        <div className='opacity-0 hover:bg-gray-600/90 hover:opacity-100 h-[200px] '>
                        <span className='text-2xl font-bold  tracking-wider text-center'>
                         Ecommerce Website
                        </span>
                            <div className='pt-8 text-center'>
                                <a href='https://clothingecommerce-ali.vercel.app' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/Ali-Mohammadi-Seta/Ecommerce' target="_blank">
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
