import React from 'react'
import Jiit from '../assets/Resume-images/Jiit.png'
const Education = () => {
    const education= [
        {
          id:1,
          name:'Jaypee Institute Of Information Technology, Noida',
          Specialization: 'B.Tech-Computer Science and Enginnering',
          Logo: Jiit,
          year: '2019-2023',
          Result:'7.8 CGPA',
          
        },
        ]
      return (
        <div name='education' className='flex flex-col h-full w-full bg-black'>
          <div className='px-10 py-10'>
              <h6 class="text-3xl text-white">Education</h6>
          
              {/* <p className='text-white mx-10 my-1'>Skills that help me build Projects:</p> */}
          </div>
          <div className='px-20 py-10'>
          <div className='border-0 flex flex-wrap gap-32'>
              <ul>
              {education.map(({id,name,Logo,Specialization,year,Result}) => (
                    <li key={id}>
                      <div  className={' flex flex-row justify-center align-middle h-auto w-auto border-0  bg-gradient-to-b from-black via-gray to-gray  shadow-lg  shadow-blue-500'}>
                      <div>
                        <img className="px-4 py-4 h-32 w-32 border-0" src={Logo} alt="" />
                      </div>
                      <div className='border-0'>
                        <div  className="text-white px-2 py-2  border-0 max-w-md font-bold" >{name}</div>
                        <div  className="text-white my-4 px-2 py-2  border-0  max-w-md" >{Specialization}</div>
                        <div  className="text-white my-4 px-2 py-2  border-0  max-w-md " >{Result}</div>
                        <div ><h2 className='text-white px-2 py-2 border-0  max-w-md'>{year}</h2></div>
                      </div>
                      
                     
                      
                      {/* <div className='flex flex-row justify-center mx-2 my-2 px-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-2xl w-[30%]'>
                          <div><span className=''> <AiFillGithub/> </span></div>
                          <div><button className='text-white mx-2' onClick={() => handleClick(id)}> Git Link</button></div>
                          
                      </div> */}
                      
                  </div>
                  </li>
              ))} 
              </ul>
        
                  
              {/* <div>
                  <img className="h-auto w-auto rounded-lg" src={path} alt=""></img>
              </div> */}
          </div>
        </div>
    </div>
      )
}

export default Education