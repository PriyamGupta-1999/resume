import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import {Link} from 'react-scroll'
const NavBar = () => {

    const [nav,setNav]= useState(false);
    const linkMap= [
        {
           id: 1,
           navObject: "home" 
        },
        {
            id: 2,
            navObject: "Experience" 
         },
         {
            id: 3,
            navObject: "projects" 
         },
         {
            id: 4,
            navObject: "skills" 
         },
         {
            id: 5,
            navObject: "education" 
         },
        

    ]
    return (
    
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
            <div>
                <h1 className='text-2xl '>Priyam Gupta</h1>
            </div>
            <ul className='hidden md:flex'>
                {linkMap.map(navbar => (
                    <li key={navbar.id} className='px-4 cursor-pointer cap text-gray-500 hover:scale-105 duration-200'>
                        <Link to={navbar.navObject} smooth duration={1000}>{navbar.navObject}</Link>
                    </li>
                    
                ))}
            </ul>

            <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30}/> :  <FaBars size={30} />}
            </div>

            {nav && (
               <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>
                    {linkMap.map(navbar => (
                        <li  key={navbar.id} className='px-4 cursor-pointer capitalize text-4xl py-6 text-gray-500 hover:scale-105 duration-200'>
                            <Link to={navbar.navObject} onClick={()=>{setNav(!nav)}} smooth duration={1000}>{navbar.navObject}</Link>
                            {/* {navbar.navObject} */}
                        </li>
                    ))}
               </ul> 
            )}
            



           
    </div>
  )
}

export default NavBar