import { NavLink } from "react-router-dom"

const Navlinks = () => {
  return (
    <div className="navlinks">
      <NavLink to = {"/"}>Home</NavLink>
      <NavLink to = {"/wallet"}>Wallet</NavLink>
      <NavLink to = {"/profile"}>Profile</NavLink>
      <NavLink to = {"/"}>Logout</NavLink>
    </div>
  )
}
export default Navlinks