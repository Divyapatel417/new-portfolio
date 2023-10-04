import React from 'react'
import portfolio from '../assets/portfolio.png'
const Projects = () => {
  return (
    <div className='p-3 mt-4 flex flex-row max-w-xl group hover:drop-shadow-md hover:bg-slate-800/50'>
    <div className='mr-4'>
    <img alt='portfolio' src={portfolio} className='w-40 h-20'></img>
    </div>
    <div className=' w-80'>
        <p className="text-lg group-hover:text-greentext text-brighttext ">Myportfolio</p>
       
        <p className="  mt-1  text-sm text-darktext max-w-sm">Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>
        <ul className=' mt-2 flex flex-wrap text-sm text-greentext'>

            {/* <li className='mr-1.5'><div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>React</div></li> */}

            {["ReactJS", "HTML", "Css3", "Git", "Tailwind css", "Javascript"].map((value) => {
                return (<li className='mt-2 mr-1.5'><div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>{value}</div></li>)
            })}
        </ul>
    </div>
</div>
  )
}

export default Projects