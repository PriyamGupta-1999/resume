import React from 'react'
import { IconContext } from "react-icons";

import {BsLinkedin,BsGithub} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"

const handleClick = (e,link) =>{
  e.preventDefault();
  window.location.href = link;
}



const SocialLinks = () => {
  
  

  return (
    
    <div className=' flex flex-justify flex-row max-w-lg h-[50px] bg-slate-400 fixed top-[90%] left-[75%] rounded-2xl'>
        <IconContext.Provider value={{ size: "30", className: "global-class-name" }}>
        <span className="border-r-2 border-r-slate-900 py-3 px-3 rounded-2xl"><a className="cursor-pointer" href="#"  onClick={(e) => handleClick(e,"https://www.linkedin.com/in/priyam-gupta-9309aa1b9/")}><BsLinkedin/></a></span>
        <span className="border-r-2 border-r-slate-900 py-3 px-3 rounded-2xl"><a className="cursor-pointer" href="#" onClick={(e) => handleClick(e,"https://github.com/PriyamGupta-1999")}><BsGithub/></a></span>
        <span className="py-3 px-3 border-r-slate-900 rounded-2xl"><BiLogoGmail/></span>
        <span><h2 className='py-3'>priyam.guptaofficial@gmail.com</h2></span>
        
        
        </IconContext.Provider>
    </div>
    
  )
}

export default SocialLinks