
import React from 'react'
import {TypeAnimation} from "react-type-animation";
import {AiFillLinkedin , AiFillInstagram} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import { FaGithub , } from 'react-icons/fa'

import HeroBg from '../assets/HeroBg.jpg'


function Hero(){

    return(
        <div>
            <div name='Hero' className=' max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
                <div name='text' className=' flex-col my-auto mx-auto'>
                    <p className='md:text-5xl sm:text-3xl text-xl font-bold text-gray-300'>Hi! I'm Ali Mohammadi</p>
                    <h1 className='md:text-7xl sm:text-4xl text-4xl font-bold md:py-6'>
                        <TypeAnimation
                            sequence={["Frontend Dev",
                                1000,
                                "Web Designer",
                                1000,
                                "Programmer",
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <div className='p-6 flex justify-start gap-10 text-purple-600'>
                        <a href='https://www.linkedin.com/in/ali-mohammadi-918523285' target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin size={30} />
                        </a>
                        <a href='mailto:alimohammadiseta3@gmail.com' target="_blank" rel="noopener noreferrer">
                            <HiOutlineMail size={30}/>
                        </a>
                        <a href='https://www.instagram.com/alimohammadiseta' target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram size={30}/>
                        </a>
                        <a href='https://github.com/Ali-Mohammadi-Seta' target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30}/>
                        </a>


                    </div>



                </div>

                <div name='image' className='my-auto'>

                <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full' src={HeroBg} alt='/'/>


                </div>




            </div>


        </div>
    )


}
export default Hero

