
import React from 'react'
import AboutBg from '../assets/AboutBg.jpg'

function About() {
    return (
        <div className=' py-10 text-white h-auto pt-40' name='About'>
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
                            <h1 className='text-4xl mb-5'>About <span>Me</span></h1>
                            <p className='text-justify leading-7 mx-auto w-11/12'>Hello , My Name Is Ali Mohammadi </p>
                            <p>I Have Bachelor's Degree In Computer Science And I've Worked With Python And Java.
                                Currently I'm a Frontend Developer and Web Designer and I'm Always Eager To Learn More!</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
