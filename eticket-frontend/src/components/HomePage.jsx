import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div className='flex justify-center bg-orange-950'>
      <img src="/Bus/Bus.png" alt="The logo of the company" width={200}/>
      <Link to={"/book"}>Book Ticket</Link>
    </div>
  )
}

export default HomePage