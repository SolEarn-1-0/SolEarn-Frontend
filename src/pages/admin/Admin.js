import Navmenu from "../../components/dashboardcomp/Navmenu"
import BalanceCard from "../../components/admincomponent/Balance";
import "./admin.css"
const Admin = () => {
  return (
		<>
			<div className="adminitems">
				<Navmenu />
				<div className="adminrght">
            <BalanceCard/>
				</div>
			</div>
		</>
	);
}
export default Admin 