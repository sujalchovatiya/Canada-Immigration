import React from 'react'
import dental from "../../assets/picture/dental.jpg"
import gender from "../../assets/picture/gender.jpg"
import key from "../../assets/picture/key.jpg"
import westbank from "../../assets/picture/west bank.jpg"



function Feature() {
  return (
    <>
    <div className='container mt-16 '>
        <h2 className='text-2xl font-semibold  sm:text-4xl '>Features</h2>
        <div>
            <div className='mt-7 flex gap-6 flex-col sm:grid sm:grid-cols-2 sm:gap-10'>
                <div className='bg-[#f5f5f5] p-3 hover:shadow-lg '>
                    <img src={gender} alt="" className='mb-5 w-full h-[150px] sm:h-[200px]'/>
                    <a href="#" className='text-lg font-semibold sm:text-3xl text-purple-800 underline'>Take action against gender-based violence</a>
                    <p className='sm:text-2xl mt-2'>Let’s come together to act now as part of the 16 Days of Activism Against Gender-based Violence.</p>
                </div>
                <div className='bg-[#f5f5f5] p-3 hover:shadow-xl'>
                    <img src={dental} alt="" className='mb-5 w-full h-[150px]  sm:h-[200px]'/>
                    <a href="#" className='text-lg font-semibold sm:text-3xl text-purple-800 underline'>Canadian Dental Care Plan</a>
                    <p className='sm:text-2xl mt-2'>Are you eligible? Applications now expanded.</p>
                </div>
                <div className='bg-[#f5f5f5] p-3 hover:shadow-xl'>
                    <img src={key} alt="" className='mb-5 w-full h-[150px]  sm:h-[200px]'/>
                    <a href="#" className='text-lg font-semibold sm:text-3xl text-purple-800 underline'>Keep your private information, private</a>
                    <p className='sm:text-2xl mt-2'>With a few simple steps to secure your accounts, you can keep your personal information safe and sound.</p>
                </div>
                <div className='bg-[#f5f5f5] p-3 hover:shadow-xl'>
                    <img src={westbank} alt="" className='mb-5 w-full h-[150px]  sm:h-[200px]'/>
                    <a href="#" className='text-lg font-semibold sm:text-3xl text-purple-800 underline'>Canada’s response to the crisis in Israel, the West Bank and the Gaza Strip</a>
                    <p className='sm:text-2xl mt-2'>Learn more about Canada’s response to the crisis in Israel, the West Bank and the Gaza Strip.</p>
                </div>
            </div>
        </div>
        <div className='mt-24'>

        <p className='sm:text-2xl text-[#26374a] font-medium'>Date modified: 2024-12-04</p>
        </div>

    </div>
      
    </>
  )
}

export default Feature
