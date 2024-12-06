import React from 'react'

function Service() {
  return (
    <>
      <div className="container mt-16">
        <div className='flex flex-col gap-3 sm:grid sm:grid-cols-3 sm:gap-7'>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Jobs</h3>
                <p className='mt-1 sm:text-xl text-gray-700'>Find a job, training, hiring programs, work permits, Social Insurance Number (SIN)</p>
            </div>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Immigration and Citizenship</h3>
                <p className=' text-gray-700 mt-1 sm:text-xl'>Visit, work, study, immigrate, refugees, permanant residents, apply, check status</p>
            </div>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Travel tourism</h3>
                <p className='text-gray-700 mt-1 sm:text-xl'>In Canada or abroad, advice, advisories, passports, visit Canada, events, attractions</p>
            </div>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Business and industry</h3>
                <p className='text-gray-700 mt-1 sm:text-xl'>Starting a business, permits, copyright, business support, selling to government</p>
            </div>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Benifits</h3>
                <p className='text-gray-700 mt-1 sm:text-xl'>EI, family and sickness leave, pensions, housing, student aid, disabilities</p>
            </div>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Taxes</h3>
                <p className='text-gray-700 mt-1 sm:text-xl'>Income tax, payroll, GST/HST, contribution limits, tax credits, charities</p>
            </div>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Health</h3>
                <p className='text-gray-700 mt-1 sm:text-xl'>Food, nutrition, diseases, vaccines, drugs, product safety and recalls</p>
            </div>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Environment and natural resources</h3>
                <p className='text-gray-700 mt-1 sm:text-xl'>Weather, climate, agriculture, wildlife, pollution, conservation, fisheries</p>
            </div>
            <div>
                <h3 className='underline mt-2 text-[#3869a1] font-semibold sm:text-2xl'>Money and finances</h3>
                <p className='text-gray-700 mt-1 sm:text-xl'>Personal finance, credit reports, fraud protection, paying for education</p>
            </div>
            
        </div>
        <button className=' mt-8 border-2 border-[#26374a] rounded-[6px] p-3 text-xl text-[#26374a] font-semibold  sm:text-2xl hover:underline'>All services</button>
      </div>
    </>
  )
}

export default Service
