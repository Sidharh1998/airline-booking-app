import { useState } from "react"
import { BiSolidPlaneAlt } from "react-icons/bi" //plane image
import { Link } from "react-router-dom";  //navigate to different page


const Home = () => {

  const [passengerValue, setPassengerValue] = useState(2);  //no of passenger state

  const handleChange = (event) => {     
    setPassengerValue(event.target.value);         //set value
  };
  

  return (
    <div className=" pt-20 flex justify-between  gap-4">
      <div className="w-3/5">
        <div className="text-5xl font-light">WHERE WOULD YOU </div>
        <div className="text-5xl font-semibold-">LIKE TO GO ?</div>
        <div className="pt-10">
          {/* inputs */}
          <form >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-xs">From</div>
                <input placeholder="Your Location" required className="w-full rounded-md  p-3 outline-none text-black " />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-xs">To</div>
                <input placeholder="Destination" required className="w-full rounded-md  p-3 outline-none text-black " />
              </div>
              <div className="flex flex-row gap-6 ">
                  <div className="flex flex-col gap-1 w-1/3">
                      <div className="font-semibold text-xs">Date</div>
                      <input type="date" placeholder="Destination" required className="rounded-md  p-3 outline-none text-black " />
                  </div>
                  <div className="flex flex-col gap-1 w-2/3">
                      <div className="font-semibold text-xs">Passenger</div>
                      <div className="flex  items-center gap-4">
                          <input type="range" min={1} max={10} value={passengerValue} onChange={handleChange}  
                          className=" w-3/4  p-3 outline-none text-black " />
                          <div className="text-xl">{passengerValue}</div>
                      </div>
                  </div>

              </div>
              <div className="text-center">
                  <Link to={'/flights'}>
                  <button type="submit" className=" bg-gradient-to-br from-red-500 to-yellow-300 hover:from-red-500 hover:to-orange-300 text-white py-2 px-4 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"> BOOK NOW</button>
                  </Link>
              </div>
            </div>
             
          </form>
        </div>
      </div>
      <div >
        <BiSolidPlaneAlt className="text-[20rem]" />
      </div>
    </div>
  )
}

export default Home
