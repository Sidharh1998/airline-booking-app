import { useState } from "react"
import { BiSolidPlaneAlt } from "react-icons/bi" //plane image
import { useNavigate } from "react-router-dom";  //navigate to different page


const Home = () => {
  const navigate = useNavigate()
  const [fromValue , setFromValue] = useState("")  //from value
  const [toValue, setToValue] = useState("")       //to value
  const [passengerValue , setPassengerValue] = useState(2);  //no of passenger state

  const handlePassengerChange = (event) => {     
    setPassengerValue(event.target.value);         //set passenger value
  };
  
  const handleFromChange = (event) => {
    setFromValue(event.target.value)              //set from value
  }

  const handleToChange = (event) => {
    setToValue(event.target.value)               //set to value
  }

  const handleSubmit = (event) => {
    event.preventDefault()  
    navigate(`${fromValue}/${toValue}`)          //Navigate to flight Available page

  }


  return (
    <div className=" pt-10 flex justify-between  gap-4" >
      <div className="lg:w-3/5">
        <div className="text-lg md:text-5xl font-light">WHERE WOULD YOU </div>
        <div className="text-lg md:text-5xl font-semibold-">LIKE TO GO ?</div>
        <div className="pt-10">
          {/* inputs */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-xs">From</div>
                <input placeholder="Your Location" onChange={handleFromChange} value={fromValue} required className="w-full rounded-md  p-3 outline-none text-black " />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-xs">To</div>
                <input placeholder="Destination" onChange={handleToChange} value={toValue} required className="w-full rounded-md  p-3 outline-none text-black " />
              </div>
              <div className="flex flex-row gap-6 ">
                  <div className="flex flex-col gap-1 w-1/3">
                      <div className="font-semibold text-xs">Date</div>
                      <input type="date" placeholder="Destination" required className="rounded-md  p-3 outline-none text-black " />
                  </div>
                  <div className="flex flex-col gap-1 w-2/3">
                      <div className="font-semibold text-xs">Passenger</div>
                      <div className="flex  items-center gap-4">
                          <input type="range" min={1} max={10} value={passengerValue} onChange={handlePassengerChange}  
                          className=" w-3/4  p-3 outline-none text-black " />
                          <div className="text-xl">{passengerValue}</div>
                      </div>
                  </div>

              </div>
              <div className="text-center">
                  
                  <button type="submit" className=" bg-gradient-to-br from-red-500 to-yellow-300 hover:from-red-500 hover:to-orange-300 text-white py-2 px-4 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"> BOOK NOW</button>
                  
              </div>
            </div>
             
          </form>
        </div>
      </div>
      <div className="hidden lg:block">
        <BiSolidPlaneAlt className="text-[20rem]" />
      </div>
    </div>
  )
}

export default Home
