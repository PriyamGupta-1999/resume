import React from 'react'
import ProfileImage from "../assets/Resume-images/profileImage.png"
import { BsFillArrowDownCircleFill, BsDownload } from "react-icons/bs"
import { Link } from 'react-scroll'
function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>



            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center h-[auto] lg:p-0 p-2'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hello world!</h2>

                    <p className='text-gray-500 py-4 max-w-md text-white'>
                        I am a 2023 graduate in B.Tech, specializing in Computer Science and Engineering. Currently working as SDE at Jio Games.</p>

                    <div>
                        <div className='  w-fit text-white px-4 py-4 my-2 flex flex-row flex-wrap rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>

                            <Link to="projects" smooth duration={1000}>
                                <div className=''><h2>Portfolio</h2></div>

                            </Link>

                            <div className=' mx-2' style={{zIndex:'0'}}>
                                <BsFillArrowDownCircleFill />
                            </div>


                        </div>
                    </div>

                    <div>
                        <a href="/Priyam_Gupta_Resume.pdf" className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#f288dd] to-pink-500' target="_blank" download={true}>
                            Download CV
                            <span className='mx-2'>
                                <BsDownload />
                            </span>
                        </a>
                    </div>
                </div>



                <div className='mx-10 lg:p-0 py-5'>
                    <img src={ProfileImage} alt=""
                        className='rounded-2xl mx-auto w-2/3 md:w-full ' />
                </div>
            </div>

        </div>



    )
}

export default Home