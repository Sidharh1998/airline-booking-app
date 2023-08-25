import { flightsList } from "../assets/data"
import FlightDetails from "../components/FlightDetails"


const FlightsAvailable = () => {
  return (
    <div className="pt-20 ">
       <div className="text-2xl font-bold">Flights from New Delhi to Bengaluru</div>
       {/* contemnt */}
       <div className="h-96 flex flex-col gap-4  pt-5 px-2  no-scrollbar overflow-y-scroll">
               {
                flightsList.map((flight) => (
                    <FlightDetails flight = {flight} />
                ))
               }
       </div>
    
    </div>
  )
}

export default FlightsAvailable
