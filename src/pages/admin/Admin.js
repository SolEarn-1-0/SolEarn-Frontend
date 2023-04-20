/** @format */

import BalanceCard from "../../components/admincomponent/Balance";
import Adminnavmenu from "../../components/admincomponent/adminnavmenu";
import "./admin.css";
const Admin = () => {
	return (
		<>
			<div className="adminitems">
				<Adminnavmenu />
				<div className="adminrght">
					<BalanceCard />
				</div>
			</div>
		</>
	);
};
export default Admin;
