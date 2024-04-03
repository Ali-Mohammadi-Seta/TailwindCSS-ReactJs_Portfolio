import React from 'react'

function Contact(){


    return(
        <div name='Contact' className="w-full h-[95vh] pt-40 flex justify-center items-center mx-auto p-4 text-gray-300">
            <form method="POST" action="https://getform.io/f/YerJkBeO" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8  text-center '>
                    <p className='text-4xl'>Contact <span>Me</span></p>
                </div>
                <input  className='bg-[#ccd6f6] p-2 text-black ' type="text" placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-[#ccd6f6] text-black ' type="email" placeholder='Email' name='email'/>
                <textarea className='bg-[#ccd6f6] p-2 text-black ' name='message' placeholder='Message' rows='10'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
        </div>
    )

}

export default Contact
