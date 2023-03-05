/** @format */

import Navlogo from "../../components/navlogo";
import Navlinks from "../../components/dashboardcomp/navlink";
import Card from "../../components/dashboardcomp/card";
import './dashboard.css'
// import HomeIcon from "@mui/icons-material/Home";
const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="dashboardlft">
				<Navlogo />
        <Navlinks/>
			</div>
      <div className="dashboardrght">
        <Card/>
      </div>
		</div>
	);
};

export default Dashboard;
