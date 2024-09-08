import React from 'react'

import {BiSolidFileHtml,BiLogoJavascript,BiLogoNodejs,BiLogoMongodb,BiLogoReact} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {DiMysql} from 'react-icons/di'
const SkillsSet = () => {
  const skills= [
    {
      id:1,
      name:'Html',
      icon: <BiSolidFileHtml size={100} color="#ffa500"/>,
      style: 'shadow-orange-500',
      
    },
    {
      id:2,
      name:'CSS',
      icon: <BiLogoTailwindCss size={100} color="#ffa500"/>,
      style: 'shadow-orange-500'
    },
    {
      id:3,
      name:'JavaScript',
      icon: <BiLogoJavascript size={100} color="#ffa500"/>,
      style: 'shadow-orange-500',
    },
    {
      id:4,
      name:'Node.js',
      icon: <BiLogoNodejs size={100} color="#ffa500"/>,
      style: 'shadow-orange-500',
    },
    {
      id:5,
      name:'MongoDb',
      icon: <BiLogoMongodb size={100} color="#ffa500"/>,
      style: 'shadow-orange-500',
    },
    {
      id:6,
      name:'MySQL',
      icon: <DiMysql size={100} color="#ffa500"/>,
      style: 'shadow-orange-500',
    },
    {
      id:7,
      name:'React.js',
      icon: <BiLogoReact size={100} color="#ffa500"/>,
      style: 'shadow-orange-500',
    },
    
  ]
  return (
    <div name='skills' className='flex flex-col h-full w-full bg-black'>
      <div className='px-10 py-10'>
          <h6 class="text-3xl text-white">Skills</h6>
      
          <p className='text-white mx-10 my-1'>Skills that help me build Projects:</p>
      </div>
      <div className='px-20 py-10'>
      <div className='border-0 flex flex-wrap gap-32'>
          {skills.map(({id,name,icon,style}) => (
                  <div key={id} className={'border-0 flex flex-col justify-center align-middle h-auto w-auto border-1  bg-gradient-to-b from-gray-800 via-gray to-gray  shadow-lg rounded-2xl hover:shadow-green-500' + ' ' + style}>
                  <div key={id} className="px-0 py-0  border-0 rounded-2xl" >{icon}</div>
                  <div key={id} ><h2 className='text-white px-2 py-2 border-0 text-center'>{name}</h2></div>
                  
                  {/* <div className='flex flex-row justify-center mx-2 my-2 px-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-2xl w-[30%]'>
                      <div><span className=''> <AiFillGithub/> </span></div>
                      <div><button className='text-white mx-2' onClick={() => handleClick(id)}> Git Link</button></div>
                      
                  </div> */}
  
              </div>
          ))} 
    
              
          {/* <div>
              <img className="h-auto w-auto rounded-lg" src={path} alt=""></img>
          </div> */}
      </div>
    </div>
</div>
  )
}

export default SkillsSet