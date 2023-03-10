import { NavLink } from "react-router-dom"
const Navlinks = () => {
  return (
		<div className="navlinks">
			<div className="navtops">
				<NavLink className = "dashactive" to={"/"}>Home</NavLink>
				<NavLink to={"/Wallet"}>Wallet</NavLink>
				<NavLink to={"/wallet"}>Withdraw</NavLink>
				<NavLink to={"/wallet"}>Swap</NavLink>
			</div>
			<div className="navbottom">
				<NavLink to={"/profile"}>Settings</NavLink>
				<NavLink to={"/"}>Logout</NavLink>
			</div>
		</div>
	);
}
export default Navlinks