/** @format */

import { NavLink } from "react-router-dom";
import Navlogo from "../navlogo";
import { TbHomeMove } from "react-icons/tb";
import { TbSwitchVertical } from "react-icons/tb";
import { TbSwitchHorizontal } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";

import React from "react";

const Adminnavmenu = () => {
	return (
		<div className="navlinks">
			<Navlogo />
			<div className="navtops">
				<NavLink className="dashactive" to={"/admin"}>
					<TbHomeMove className="icons" /> Home
				</NavLink>
				<NavLink to={"/Payroll"}>
					<MdOutlinePayments className="icons" /> Payroll
				</NavLink>
				<NavLink to={"/Transaction"}>
					{" "}
					<TbSwitchVertical className="icons" /> Transaction
				</NavLink>
				<NavLink to={"/swap"}>
					<TbSwitchHorizontal className="icons" />
					Swap
				</NavLink>
			</div>
			<div className="navbottom">
				<NavLink to={"/profile"}>
					<TbSettings className="icons" />
					Settings
				</NavLink>
				<NavLink to={"/"}>
					<TbLogout className="icons" />
					Logout
				</NavLink>
			</div>
		</div>
	);
};

export default Adminnavmenu;
