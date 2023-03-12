/** @format */

import Navlogo from "../../components/navlogo";
import Navlinks from "../../components/dashboardcomp/navlink";
import Card from "../../components/dashboardcomp/card";
import data from "../../components/dashboardcomp/carddata";
import './dashboard.css'
// import HomeIcon from "@mui/icons-material/Home";
const Dashboard = () => {

	const cardItems = data.map((item) => {
		return <Card key = {item.id} {...item}/>;
	})

	return (
		<div className="dashboard">
			<div className="dashboardlft">
				<Navlogo />
        <Navlinks/>
			</div>
      <div className="dashboardrght">
       {cardItems}
      </div>
		</div>
	);
};

export default Dashboard;
