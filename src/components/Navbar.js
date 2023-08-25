import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex flex-row w-full border-b-2 gap-3 justify-between z-10">   
    {/* Header-left */}
      <Link to={'/'}>
      <div className=" font-extrabold text-lg cursor-pointer">FLIGHTINDIA</div>
      </Link>
    {/*header-middle  */}
      <div className=" justify-between text-sm gap-3 hidden md:flex">
           <Link to={'/'}>
           <div className="cursor-pointer">HOME</div>
           </Link>
           <div className="cursor-pointer">ABOUT</div>
           <div className="cursor-pointer">SERVICE</div>
           <div className="cursor-pointer">CONTACT</div>
      </div>
    {/* header-left */}
      <div className="cursor-pointer">LOGIN/SIGNUP</div>
    </div>
  )
}

export default Navbar
