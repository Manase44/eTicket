import React from 'react'
import BookingPage from './BookingPage'

function HomePage() {
  return (
    <div className='container cont'>
        <div className='row h-100 align-items-center'>
          <div className='col text-center'>
          <img src="/Bus/Bus.png" className='img-fluid' alt="A bus picture" id='bus'/>
            <span>eTicket</span>
            <a href="/BookingPage.js">Book</a>
          </div>
        </div>
    </div>
  )
}

export default HomePage