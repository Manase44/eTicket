import React from "react";
import { RiDownload2Fill } from "react-icons/ri";

const BookingPage = () => {
  return (
    <div>
      <nav className="flex h-10 px-5 justify-between items-center bg-orange-950">
        <div>
          <span className="text-2xl text-white">eTicket</span>
        </div>
        <div>
          <RiDownload2Fill className="text-white"/>
        </div>
      </nav>
      <div className="mt-4 flex justify-center">
        <form action="">
          <div>
            <input className="rounded border px-2 py-1 h-12 mb-4" type="text" name="from" id="" placeholder="From..." required/>
          </div>
          <div>
            <input className="rounded border px-2 py-1 h-12 mb-4" type="text" name="to" id="" placeholder="To..." required/>
          </div>
          <div>
            <input className="rounded border px-2 py-1 h-12 mb-5 w-full" type="date" name="date" id="" placeholder="Date..." required/>
          </div>
          <div className="mb-5 border rounded px-2 py-1">
            <a href="#">
              <p>Malindi-Nairobi @19hrs <strong>1,800/=</strong></p>
            </a>
            <a href="#">
              <p>Malindi-Nairobi @19hrs <strong>1,800/=</strong></p>
            </a>
          </div>
          <div className="flex justify-center">
            <input className="rounded-full w-full bg-orange-950 hover:bg-white text-white hover:text-slate-400 text-semi-bold px-3 py-2" type="submit" value="Book Ticket" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;