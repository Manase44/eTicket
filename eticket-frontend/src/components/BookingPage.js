import React from 'react'

function BookingPage() {
  return (
    <div className='container'>
        <nav className='navbar px-3'>
            <span>eTicket</span>
        </nav>
        <div className='row'>
            <div className='col form-col'>
                <form className='form-group'>
                    <div className='mb-2'>
                      <label for='from'>From</label>
                      <input name='from' id='from' type='text' required/>
                    </div>
                    <div className='mb-2'>
                      <label for='To'>To</label>
                      <input name='To' id='To' type='text'required/>
                    </div>
                    <div className='mb-2'>
                      <label for='Date'>Date</label>
                      <input name='Date' id='Date' type='date' required/>
                    </div>

                    <div>
                      <input type='submit' value="Choose Seat" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default BookingPage