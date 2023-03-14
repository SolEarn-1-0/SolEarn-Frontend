/** @format */

import Card from "../../components/dashboardcomp/card";
import data from "../../components/dashboardcomp/carddata";
import Navmenu from "../../components/dashboardcomp/Navmenu";
import './dashboard.css'
// import HomeIcon from "@mui/icons-material/Home";
const Dashboard = () => {

	const cardItems = data.map((item) => {
		return <Card key = {item.id} {...item}/>;
	})

	return (
		<div className="dashboard">
			<Navmenu/>
			<div className="dashboardrght">
				<div className="button">
					<button>Connect Wallet</button>
				</div>
				<div className="carditems">

				{cardItems}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
