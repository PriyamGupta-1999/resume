import React from 'react'
import chat2vibe from '../assets/Resume-images/chat2vibe.com.png'
import path from '../assets/Resume-images/Path.png'
import todoapp from '../assets/Resume-images/cwg.png'

import { AiFillGithub } from 'react-icons/ai'


const Portfolio = () => {

  const projectList = [
    {
      id: 1,
      image: todoapp,
      name: "Code With Guptaji",
      description: `Designed and developed an Ed-tech platform enabling administrators, instructors, and students to perform essential operations. Implemented instructor capabilities to upload lectures, allowing students to purchase and view them seamlessly within a single application environment.
    Used Node.js and Express.js to build MVC architecture for the backend, integrating MongoDB as the DBMS.
      Built a high-performance, interactive frontend using React.js. Used state management techniques, Redux, and
      routing for smooth functionality.
       Integrated Razorpay payment services for seamless transactions.
       
      `,
      demo:<a href='https://code-with-guptaji-2024.vercel.app/'>codewithguptaji</a>,
      gitlink: "https://github.com/PriyamGupta-1999/CodeWithGuptaji"

    },
    {
      id: 2,
      image: chat2vibe,
      name: "chat2vibe",
      description: "Tool: Node.js, Express.js, MongoDb, HTML, CSS and AWS. Developed social media web application with chatting engine. Node.js is used to develop back-end server. Chatting engine is implemented using sockets.io where clients can share data in websockets. Mongoose is utilised for creating schema instances to store user profile, posts and comments. Utilised passport.js for user authentication. Utilised embedded javascript template to include dynamic data and share templated  pieces with web pages.website is deployed on ec2 instance of amazon web services.",
      gitlink: "https://github.com/PriyamGupta-1999/chat2vibe"

    },
    {
      id: 3,
      image: path,
      name: "Path Finding Visualiser",
      description: "Tool: React, JavaScript, CSS . Developed React based single page application for visualising Dijkstra’s algorithm.Javascript is utilised to implement Dijkstra’s algorithm.State management techniques are used to initialize and update the grid.Utilised mouse event on mouse click and hover to make walls.",
      gitlink: "https://github.com/PriyamGupta-1999/PathfindingVisualiser"

    },



  ]

  const handleClick = (id) => {
    const project = projectList.find((project) => project.id === id);
    if (project && project.gitlink) {
      window.location.href = project.gitlink;
    } else {
      // Handle the case when gitlink is not available (optional)
      console.log("Git link not available for this project.");
    }
    // window.location.replace(projectList[key].gitlink)
  }
  return (
    <div name="projects" className='flex flex-col h-full w-full bg-black'>
      <div className='px-10 py-5'>
        <h6 class="text-3xl text-white">Portfolio</h6>

        <p className='text-white mx-10 my-1'>Check out some of projects</p>
      </div>
      <div className='px-10 py-2'>
        <div className='flex sm:flex-row flex-col  gap-10 '>
          {projectList.map(({ id, image, name, description, gitlink,demo }) => (
            <div key={id} className='flex flex-col justify-between h-auto w-auto border-1 flex-1 bg-gradient-to-b from-gray-800 via-gray to-gray p-2  shadow-lg shadow-gray-500 rounded-2xl'>
              <div className='flex flex-col h-[80%]'>
                <div className='w-[100%] h-[20%] '>
                  {/* <iframe src={'https://code-with-guptaji-2024.vercel.app/'}/> */}
                  <img className="w-full h-full border-1 rounded-2xl " style={{ objectFit: 'contain', aspectRatio: '16/9' }} src={image} alt="" />
                </div>


                <h2 className='text-white px-2 py-2 text-xl font-semibold text-blue-500'>{name}</h2>
                <p className='text-white px-2 py-2 text-justify' >{description}</p>
                {demo && (
              <p className='text-blue-400 px-2 py-2'>
                Demo: <a href={demo} target="_blank" rel="noopener noreferrer" className='underline'>{demo}</a>
              </p>
            )}
              </div>
              <div className='flex flex-row h-[5%] w-[100%] justify-center mx-2 my-2  bg-gradient-to-r from-orange-500 to-orange-950  rounded-2xl w-[50%]'>
                <div><span className=''> <AiFillGithub size={20} /> </span></div>
                <div><button className='text-white mx-2' onClick={() => handleClick(id)}> Git Link</button></div>

              </div>

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

export default Portfolio