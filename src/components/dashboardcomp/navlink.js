import { NavLink } from "react-router-dom"
// import HomeIcon from "@mui/icons-material/Home";
const Navlinks = () => {
  return (
		<div className="navlinks">
			<div className="navtops">
				<NavLink to={"/"}>Home</NavLink>
				<NavLink to={"/wallet"}>Wallet</NavLink>
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