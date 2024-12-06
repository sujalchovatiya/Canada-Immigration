import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa";
import Menu from '../Menu/Menu';

function Hero() {

    const [openMenu , setOpenMenu] = useState(false)

    const handleOpen = () => {
        setOpenMenu(!openMenu)
    }
  return (
    <>
      <div className='container mt-3'>
        <div className='flex justify-between '>
        <div className='bg-[#26374a] flex px-3 py-2 items-center gap-1 rounded-sm' onClick={handleOpen}>
        <button className=' text-xl text-white font-medium'>Menu</button>
        <FaAngleUp  className={`text-white text-xl hover:rotate-180 duration-500`} />
        </div>
        <div className=''>
            <a href='#' className='cursor-pointer text-white p-3 rounded-sm flex items-center justify-center bg-[#26374a]'>Sign in</a>
        </div>
        </div>
        {openMenu && (

          
            <div className='mt-2'>
            <Menu />
        </div>
        )}
        
      </div>
    </>
  )
}

export default Hero
