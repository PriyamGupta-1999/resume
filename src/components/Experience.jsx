import React from 'react'
import Jiit from '../assets/Resume-images/jiogames.png'
export const Experience = () => {
    const education = [
        {
            id: 1,
            name: 'Jio Platforms Ltd.',
            Specialization: 'Software Developer Engineer',
            Logo: Jiit,
            year: 'June 2023-ongoing',
            //   Result:'7.8 CGPA',

        },
    ]
    return (
        <div name='education' className='flex flex-col h-full w-full bg-black'>
            <div className='px-10 py-10'>
                <h6 class="text-3xl text-white">Experience</h6>

                {/* <p className='text-white mx-10 my-1'>Skills that help me build Projects:</p> */}
            </div>
            <div className='w-[100%]'>
                <div className='flex justify-center gap-32 w-[100%]'>
                    <ul className='w-[50%] flex justify-center'>
                        {education.map(({ id, name, Logo, Specialization, year, Result }) => (
                            <li key={id} className='w-[100%]'>
                                <div className={'flex flex-col lg:flex-row justify-between w-[100%] border-0 bg-slate-900  shadow-lg shadow-green-500 p-4'}>
                                    <div className='flex flex-col flex-1 justify-center align-middle gap-2 lg:w-[40%] w-[100%]'>
                                        <div className='w-[100%] h-[80%] flex justify-center'>
                                            <img className="px-4 py-4 border-0" style={{ objectFit: 'cover', aspectRatio: '1/1',maxHeight:'5em'}} src={Logo} alt="" />
                                        </div>

                                        <div className='w-[100%] h-[20%] justify-center align-middle' >
                                            <h4 className='text-white text-center'>{name}</h4>
                                        </div>

                                    </div>
                                    <div className='lg:w-[60%] w-[100%] flex flex-row justify-end '>
                                        <div className="text-white my-4 px-2 py-2  border-0 flex flex-col justify-between h-[100%]" >
                                            <p>{Specialization}</p>
                                            <p className='text-white px-0 py-2 border-0 lg:text-end'>{year}</p>
                                        </div>
                                    </div>



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

