import React from 'react'
import { RiDownload2Fill } from "react-icons/ri";
import Navbar from './Navbar';

const PaymentPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-4 flex justify-center">
        <form action="">
          <div>
            <input className="rounded border px-2 py-1 h-12 mb-4" type="text" name="name" id="" placeholder="Enter Name" required/>
          </div>
          <div>
            <input className="rounded border px-2 py-1 h-12 mb-4" type="text" name="ID" id="" placeholder=" Enter National ID" required/>
          </div>
          <div>
            <input className="rounded border px-2 py-1 h-12 mb-5 w-full" type="tel" name="phone" id="" placeholder="Enter phone number" required/>
          </div>
         
          <div className="flex justify-center">
            <input className="rounded-full w-full bg-orange-950 cursor-pointer border hover:border-orange-950 hover:bg-white text-white hover:text-slate-400 text-semi-bold px-3 py-2" type="submit" value="Pay" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentPage