import { NavLink } from "react-router-dom"
const Navlinks = () => {
  return (
		<div className="navlinks">
			<div className="navtops">
				<NavLink className = "dashactive" to={"/dashboard"}>Home</NavLink>
				<NavLink to={"/Wallet"}>Wallet</NavLink>
				<NavLink to={"/withdraw"}>Withdraw</NavLink>
				<NavLink to={"/swap"}>Swap</NavLink>
			</div>
			<div className="navbottom">
				<NavLink to={"/profile"}>Settings</NavLink>
				<NavLink to={"/"}>Logout</NavLink>
			</div>
		</div>
	);
}
export default Navlinks