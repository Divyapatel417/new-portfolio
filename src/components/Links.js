import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


const Links = () => {
    return (
        <div className='flex flex-row gap-3 max-w-sm'>
        
        <div className='text-darktext hover:text-brighttext'><AiOutlineInstagram  size="30px"
            /> </div>
            <div className='text-darktext hover:text-brighttext'><AiFillGithub  size="30px"
            /> </div>
            <div className='text-darktext hover:text-brighttext'><AiFillLinkedin  size="30px"
            /> </div>
          
        </div>
    )
}

export default Links