import React from 'react'
import AboutBg from '../assets/AboutBg.jpg'

function About() {
    return (
        <div className=' pt-32 text-white h-[1000px] mx-auto' name='About'>
            <div className='flex sm:flex-row flex-col-reverse  items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto '>
                <div>
                    <div className='w-[400px] '>
                        <img src={AboutBg}
                             className='object-cover rounded-xl h-[300px] filter grayscale brightness-50'/>

                    </div>
                </div>
                <div name='Text'>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <div className='mb-10'>
                                <h1 className='text-4xl'>About <span>Me</span></h1>
                            </div>
                            <p className=''>Hello , My Name Is Ali Mohammadi </p>
                            <p>
                                I Have a Bachelor's Degree In Computer Science And I'm a Frontend Developer and Web
                                Designer. Currently, I'm Improving and Learning New Skills In This Field and Did a Few
                                Personal Projects, and I'm Always Eager To Learn More.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
