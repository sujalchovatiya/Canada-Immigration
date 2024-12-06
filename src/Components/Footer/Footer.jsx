import React from 'react'
import { GoDotFill } from "react-icons/go";
import footerlogo from "../../assets/Logo/wmms-blk.svg"

function Footer() {
  return (
    <>
    <div className='container mt-10 mb-10'>
        <div className='flex justify-between items-center'>
            <div>
                <ul className='text-blue-900 flex flex-col sm:flex-row   gap-2 sm:gap-8 sm:items-center sm:flex items-start '>
                    <li className='hover:text-blue-500'>Social media </li> 
                    <GoDotFill className='hidden sm:block' />  
                    <li className='hover:text-blue-500'>Mobile Application</li>  
                    <GoDotFill className='hidden sm:block'/>   
                    <li className='hover:text-blue-500'>About Canada.ca</li>  
                    <GoDotFill className='hidden sm:block'/>   
                    <li className='hover:text-blue-500'>Teems and condition</li> 
                    <GoDotFill className='hidden sm:block'/>    
                    <li className='hover:text-blue-500 '>Privcy</li>     

                </ul>
                
            </div>
            <div className=''>
                <img src={footerlogo} alt="" className='sm:w-[180px] w-[80px] ' />
            </div>
        </div>

    </div>
      
    </>
  )
}

export default Footer
