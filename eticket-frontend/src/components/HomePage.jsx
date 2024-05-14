import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen flex justify-center flex-col gap-5 items-center bg-chocolate-2">
      <div>
        <img src="/Bus/Bus.png" alt="The logo of the company" width={200} />
      </div>
      <Link to={"/book"} className="text-slate-100 font-bold text-3xl hover:cu">
        Book Ticket
      </Link>
    </div>
  );
}

export default HomePage;
