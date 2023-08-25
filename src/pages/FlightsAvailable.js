import { flightsList } from "../assets/data"
import FlightDetails from "../components/FlightDetails"
import { useParams } from "react-router-dom";

const FlightsAvailable = () => {
  const { fromvalue, toValue } = useParams(); //from and to values
  return (
    <div className="pt-5  ">
       <div className="text-lg md:text-2xl pb-4 font-bold">Flights from {fromvalue} to {toValue}</div>
       {/* contemnt */}
       <div className="lg:h-96 flex md:flex-col gap-4  pt-5 px-2  no-scrollbar overflow-x-scroll overflow-y-scroll">
               {
                flightsList.map((flight) => (
                    <FlightDetails key={flight.id} flight = {flight} />
                ))
               }
       </div>
    
    </div>
  )
}

export default FlightsAvailable
