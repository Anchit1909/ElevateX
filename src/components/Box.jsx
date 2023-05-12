import React from 'react'
import { motion } from 'framer-motion'
function Box() {
  return (
    <motion.div whileHover={{scale:1.5}}   className='flex justify-center items-center'> 
        <div className="bg-blue-900 mt-36 h-44 md:h-56 md:w-10/12 w-screen rounded-2xl flex">
            <div className=' -mt-4 h-52 md:h-64 w-[250px] ml-10 rounded-2xl bg-blue-100  flex justify-center items-center'>
                <img src='dp1.jpg' className=' w-32 md:w-48 h-32 md:h-56' />
            </div>
            <div className='flex flex-col '>
            <p className='text-3xl ml-20 mt-5 text-white'>Akarsh Saxena</p>
            <p className='text-lg ml-20 mt-5  text-white'>I found this place extraordinary good and realstic</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Box