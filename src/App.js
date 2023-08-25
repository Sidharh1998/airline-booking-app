import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import FlightsAvailable from "./pages/FlightsAvailable";
import BookingPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";

function App() {


  return (
    <div className="App bg-gradient-to-r from-violet-500 to-blue-500 h-screen w-screen  text-white md:px-20 px-10  pt-6 ">
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path=':fromvalue/:toValue' element={<FlightsAvailable/>} />
      <Route path=':fromvalue/:toValue/booking' element={<BookingPage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
