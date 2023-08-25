import {FaBarcode} from "react-icons/fa"
import { useParams } from "react-router-dom";

const BookingPage = () => {
   const { fromvalue, toValue } = useParams(); // from and to values

  return (
    <div className="pt-5 md:pt-10 flex justify-center ">
        <div className="bg-white text-black rounded-xl p-3 md:p-6 w-3/4">
            <div className="flex flex-col gap-1 sm:flex-row justify-between">
               <div className="text-2xl font-bold">Flight Tickets</div>
                <div className="flex flex-row">
                   <div className="font-bold text-gray-500">{fromvalue}</div>
                   <div>⏩</div>
                   <div className="font-bold text-gray-500">{toValue}</div>
                 </div>
            </div>
            {/* ticket details */}
            <div className="flex flex-row justify-between py-8  border-b-2 border-dotted">
                <div className="flex flex-col gap-4">
                   <div className="flex flex-col gap-1">
                      <div className="font-thin">Passengers</div>
                      <div className="font-bold">2 Adults</div>
                   </div>
                   <div className="flex flex-col">
                      <div className="font-thin">Flight No.</div>
                      <div className="font-bold">BKMN&</div>
                   </div>
                   <div className="flex flex-col">
                      <div className="font-thin">Class</div>
                      <div className="font-bold">Business</div>
                   </div>
                </div>
                <div className="flex flex-col gap-4">
                   <div className="flex flex-col gap-1">
                      <div className="font-thin">Date</div>
                      <div className="font-bold">11/02/2023</div>
                   </div>
                   <div className="flex flex-col">
                      <div className="font-thin">Gate</div>
                      <div className="font-bold">66 B</div>
                   </div>
                   <div className="flex flex-col">
                      <div className="font-thin">Seat</div>
                      <div className="font-bold">21 B</div>
                   </div>
                </div>
            </div>
            {/* barcode */}
            <div className="flex justify-center">
              <FaBarcode className="text-9xl"/>
              <FaBarcode className="text-9xl"/>

            </div>
            
            
        </div>
    </div>
  )
}

export default BookingPage

