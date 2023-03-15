/** @format */

import { NavLink } from "react-router-dom";
import Style from "../styles/Nav.module.css";
import Navlogo from "./navlogo";
const Navbar = () => {
	return (
		<nav>
			<Navlogo />

			<div className={Style.navlinks}>
				<NavLink to={"/"}>Home</NavLink>
				<NavLink to={"/about"}>AboutUs</NavLink>
				<NavLink to={"/contactus"}>ContactUs</NavLink>
			</div>

			<div className={Style.navbtns}>
				<NavLink  to={"/contactus"}>SignIn</NavLink>
				<NavLink  to={"/getstarted"}>SignUp</NavLink>
			</div>
		</nav>
	);
};
export default Navbar;
