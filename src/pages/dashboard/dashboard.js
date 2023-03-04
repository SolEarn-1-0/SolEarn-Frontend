/** @format */

import Navlogo from "../../components/navlogo";
import Navlinks from "../../components/dashboardcomp/navlink";
const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="dashboardlft">
				<Navlogo />
        <Navlinks/>
			</div>
		</div>
	);
};

export default Dashboard;
