
import React from "react";
import css from "../assets/css.png"
import html from "../assets/html.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png";
function Skills (){


    return(
        <div name='Skills' >
            {/*{container}*/}
            <div className='pt-10 mx-auto flex flex-col justify-center w-full  '>
                <div className=' text-center'>
                    <p className='text-gray-300 text-4xl'>My <span>Skills</span></p>
                </div>
            </div>
            <div className='mx-auto max-w-[1000px]  grid  sm:grid-cols-2  gap-4 text-center py-20'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='HTML icon'/>
                    <p className='my-4 text-gray-300 '>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='CSS icon'/>
                    <p className='my-4 text-gray-300 '>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt='React icon'/>
                    <p className='my-4 text-gray-300 '>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt='Tailwind icon'/>
                    <p className='my-4 text-gray-300 '>Tailwind</p>
                </div>
            </div>

        </div>
    )
}



export default Skills