/** @format */

import { AiOutlinePlus } from "react-icons/ai";
import sol from "../../Images/sol.png";
import AdminChart from "./adminchart";
import { Progress } from "@mantine/core";
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
					<div className="paymentrequest">
						<h1>Active payment request</h1>
						<p>You requested $40.00 For Monthly dues</p>
						<div className="requesttxt">
							<div className="images">
								<img
									src="https://imgs.search.brave.com/hbth4FeM2AaX-OPljdeO99ldCoFb5GL5JkQA2o-AaI4/rs:fit:250:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/LWRYUk41aXRtTTJl/RTd6TVFqb3dRQUFB/QSZwaWQ9QXBp"
									alt=""
								/>
								<img
									src="https://imgs.search.brave.com/8C_x2h03WG_9Quh7a7g7soe8JNbqR0j5Am041KIiASU/rs:fit:470:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/UUxaUXBybHdkb3Y3/VzZDQm5IaTZ3SGFI/ZSZwaWQ9QXBp"
									alt=""
								/>
								<img
									src="https://imgs.search.brave.com/Ve9cTZSU5jBj9qBd1CYP9_KhFHXmADqhJxdOKJok5PU/rs:fit:166:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/emVJbmIwWUY0ckNW/bXRmbUtxYXpnQUFB/QSZwaWQ9QXBp"
									alt=""
								/>
							</div>
							<div className="desc">
								<p>283 Employee . Optional . Feb 19, 2023</p>
							</div>
						</div>
						<div className="prgressbar">
							<Progress color="rgb(75, 16, 71)" value={50} />
							<p></p>
							<p></p>
						</div>
					</div>

					<div className="memberswallet">
						<h1>Employee Wallets</h1>
							<div className="memberstitle">
								<div className="totalalocated">
									<h4>Total Allocated</h4>
									<p className="totalprice">$75,000.67</p>
								</div>
								<div className="totalalocated">
									<h4>Total Employee</h4>
									<p className="totalprice">$75,000.67</p>
								</div>
								<div className="funds">
									<button>Add Funds</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default BalanceCard;
