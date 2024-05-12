import './App.css';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';
import Reciept from './components/Reciept';
import PaymentPage from './components/PaymentPage';
import ChooseSeat from './components/ChooseSeat';
import Thankyou from './components/Thankyou';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/book' element={<BookingPage/>}/>
          <Route path='/choose-seat' element={<ChooseSeat/>}/>
          <Route path='/pay' element={ <PaymentPage/>}/>
          <Route path='/receipt' element={<Reciept/>}/>
          <Route path='/thanks'element={<Thankyou/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
