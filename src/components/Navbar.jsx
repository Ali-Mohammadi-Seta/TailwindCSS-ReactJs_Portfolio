import React,{useState} from "react";
import {AiOutlineClose , AiOutlineMenu , AiFillInstagram} from "react-icons/ai";
import { FaGithub , FaLinkedin ,} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi";
import {Link} from 'react-scroll';

function Navbar(){

    const [nav,setNav]=useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return(
    <div   className='text-gray-400 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l'>

       <h className='w-full text-3xl primary-color ml-4 font-bold'>Ali</h>

        <ul className='hidden md:flex '>

            <li className='px-4 cursor-pointer'>  <Link
                to="Hero"
                smooth={true}
                duration={500}>
                Home
            </Link>
            </li>
            <li className='px-4 cursor-pointer'><Link
                to="About"
                smooth={true}
                duration={500}>
                About
            </Link>
            </li>
            <li className='px-4 cursor-pointer'>
                <Link
                    to="Skills"
                    smooth={true}
                    duration={500}>
                    Skills
                </Link>
            </li>

            <li className='px-4 cursor-pointer'>  <Link
                to="Work"
                smooth={true}
                duration={500}>
                Work
            </Link>
            </li>
            <li className='px-4 cursor-pointer'>
                <Link
                    to="Contact"
                    smooth={true}
                    duration={500}>
                    Contact
                </Link>
            </li>
        </ul>


   

   <div name='Button' onClick={handleNav} className='block md:hidden cursor-pointer'>
       {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
   </div>

   <div name='mobile menu' className={nav ? 'text-gray-300 bg-[#20242d] h-full fixed left-0 top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500 ' : 'fixed left-[-100%]'}>

       <h className='text-3xl primary-color m-4'>Ali</h>

       <ul className='p-8 text-2xl cursor-pointer'>

           <li className='p-2 cursor-pointer'>  <Link onClick={()=> setNav(!nav)}
               to="Hero"
               smooth={true}
               duration={500}>
               Home
           </Link>
           </li>
           <li className='p-2 cursor-pointer'><Link onClick={()=> setNav(!nav)}
               to="About"
               smooth={true}
               duration={500}>
               About
           </Link>
           </li>
           <li className='p-2 cursor-pointer'>
               <Link  onClick={()=> setNav(!nav)}
                   to="Skills"
                   smooth={true}
                   duration={500}>
                   Skills
               </Link>
           </li>


           <li className='p-2 cursor-pointer'>
               <Link  onClick={()=> setNav(!nav)}
                   to="Work"
                   smooth={true}
                   duration={500}>
                   Work
               </Link>
           </li>

           <li className='p-2 cursor-pointer'>
               <Link  onClick={()=> setNav(!nav)}
                      to="Contact"
                      smooth={true}
                      duration={500}>
                   Contact
               </Link>
           </li>

       </ul>

       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
           <ul>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-400'>
                   <a href="https://www.linkedin.com/in/ali-mohammadi-918523285" target="_blank"
                       className='flex justify-between items-center w-full text-gray-300 pl-5 '>
                       Linkedin <FaLinkedin size={30}/>
                   </a>
               </li>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
                   <a  href="mailto:alimohammadiseta3@gmail.com" target="_blank"
                       className='flex justify-between items-center w-full text-gray-300 pl-5 '>
                       Mail Me <HiOutlineMail size={30}/>
                   </a>
               </li>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f09433]'>
                   <a  href="https://www.instagram.com/alimohammadiseta" target="_blank"
                       className='flex justify-between items-center w-full text-gray-300 pl-5 '>
                       Instagram <AiFillInstagram size={30}/>
                   </a>
               </li>
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
                   <a  href="https://github.com/Ali-Mohammadi-Seta" target="_blank"
                       className='flex justify-between items-center w-full text-gray-300 pl-5 '>
                       Github <FaGithub size={30}/>
                   </a>
               </li>
           </ul>
       </div>

   </div>

    </div>)





}

export default Navbar
