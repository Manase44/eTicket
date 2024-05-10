import React from 'react'

function ChooseSeat() {
  return (
    <div id='cont' className='flex justify-center items-center'>
      <form action="">
        <div id='bus' className='border border-orange-950 rounded-lg p-3'>
          <div className='flex grid grid-cols-5 gap-2 mb-3'>

            <div className='flex justify-center relative bg-slate-200 w-14 h-14  rounded-md'>
              <div className='flex justify-center w-full h-full items-center'>
                <input type="image" className='object-cover' src="Bus/Bus.png" width={60}/>
              </div>
              <span className='text-white absolute top-3 cursor-pointer font-semibold'>20</span>
            </div>

            <div className='flex justify-center relative bg-slate-200 w-14 h-14  rounded-md'>
              <div className='flex justify-center w-full h-full items-center'>
                <input type="image" className='object-cover' src="Bus/Bus.png" width={60}/>
              </div>
              <span className='text-white absolute top-3 cursor-pointer font-semibold'>20</span>
            </div>
            
            <div className='w-14 h-14'>
              
            </div>

            <div className='flex justify-center relative bg-slate-200 w-14 h-14  rounded-md'>
              <div className='flex justify-center w-full h-full items-center'>
                <input type="image" className='object-cover' src="Bus/Bus.png" width={60}/>
              </div>
              <span className='text-white absolute top-3 cursor-pointer font-semibold'>20</span>
            </div>

            <div className='flex justify-center relative bg-slate-200 w-14 h-14  rounded-md'>
              <div className='flex justify-center w-full h-full items-center'>
                <input type="image" className='object-cover' src="Bus/Bus.png" width={60}/>
              </div>
              <span className='text-white absolute top-3 cursor-pointer font-semibold'>20</span>
            </div>
          </div>
          
          <div className='flex justify-center relative bg-slate-200 w-14 h-14  rounded-md'>
            <div className='flex justify-center w-full h-full items-center'>
              <input type="image" className='object-cover' src="Bus/driver_seat.png" width={60}/>
            </div>
            <span className='text-white absolute top-3 cursor-pointer font-semibold'>D</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChooseSeat