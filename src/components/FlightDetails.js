import {PiAirplaneInFlightFill} from "react-icons/pi"
import { Link } from "react-router-dom"

const FlightDetails = ({flight}) => {
  return (
    <div className="bg-white text-black rounded-lg flex p-2 justify-between items-center shadow-slate-50 shadow-md">
        {/* flight name */}
        <div className="flex gap-2 items-center ">
            
            <div className="text-blue-800 text-5xl"><PiAirplaneInFlightFill/></div>
            <div className="font-bold">{flight.name}</div>

        </div>
        {/* start time */}
        <div className="flex flex-col gap-1 items-center ">
            <div className="font-bold">{flight.start}</div>
            <div className="font-light text-sm">New Delhi</div>
        </div>
        {/* total time */}
        <div className="flex flex-col gap-1">
            <div className="text-sm font-light">{flight.time}</div>
            <div className="w-full rounded-xl p-1 bg-green-400"></div>
            <div className="text-xs font-light">{flight.type}</div>
        </div>
        {/* end time */}
        <div className="flex flex-col gap-1">
            <div  className="font-bold">{flight.end}</div>
            <div className="font-light text-sm">Banglore</div>
        </div>
        {/* price and comfirmation */}
        <div className="flex gap-2">
            <div className="font-bold">$ {flight.cost}</div>
            <div>
                <Link to={'/flights/booking'} >
                <button className="p-1 rounded-lg bg-orange-300 text-white">Confirm</button>
                </Link>            
            </div>
        </div>

    </div>
  )
}

export default FlightDetails
