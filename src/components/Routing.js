import React from 'react'

const Routing = () => {
  return (
    <div className='flex-row  grid gap-y-5'>
      <div class="inline-flex items-center w-full">
        <hr class="w-16 h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className=' pl-3 text-base font-bold text-brighttext'> ABOUT</p></div>
        <div class="inline-flex items-center w-full">
        <hr class="w-16 h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className=' pl-3 text-base font-bold text-brighttext'> EXPERIENCES</p></div>
        <div class="inline-flex items-center w-full">
        <hr class="w-16 h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className=' pl-3 text-base font-bold text-brighttext'> PROJECTS</p></div>
    </div>
  )
}

export default Routing