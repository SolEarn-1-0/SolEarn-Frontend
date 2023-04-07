/** @format */

import { AiOutlinePlus } from "react-icons/ai";
import sol from '../../Images/sol.png'
import AdminChart from "./adminchart";
const BalanceCard = (props) => {
	return (
		<>
			<div className="admincrds">
				<div className="admincrdlft">
					<div className="balancecrditems">
						<h1>Balance</h1>
						<p>CROWDED CHECKING ACCOUNT</p>
						<div className="price">
							<h1 className="adminprice">$45,000,345</h1>
							<button>
								<AiOutlinePlus /> DEPOSIT
							</button>
						</div>
						<AdminChart />
					</div>
					<div className="organisationitem">
						<h1>Organisation Settings</h1>
						<div className="orgtxt">
							<p>Logo</p>
							<img src={sol} alt="" />
							<p>Organisation</p>
							<h3>Solana</h3>
							<p>Account Owner</p>
							<h3>Anatoly Yakovenko</h3>
							<p>Chapter/Branch</p>
							<h3>Design Team</h3>
						</div>
					</div>
				</div>
				<div className="admincrdrght">
					<h1>Active payment request</h1>
					<p>You requested $40.00 For Monthly dues</p>
				</div>
			</div>
		</>
	);
};
export default BalanceCard;
