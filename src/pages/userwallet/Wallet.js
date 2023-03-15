import Navmenu from "../../components/dashboardcomp/Navmenu"
import './wallet.css'
import Chart from "../../components/dashboardcomp/chart"
import sol from "../../Images/sol.png"
const Wallet = () => {
  return (
		<div className="walletitems">
			<Navmenu />
			<div className="walletrigt">
				<div className="button">
					<button>Connect Wallet</button>
				</div>
				<div className="chartcrd">
					<h1>Balance</h1>
					<p>
						<img src={sol} alt="" /> <span>20000000000000</span>
					</p>

					<Chart />
				</div>
			</div>
		</div>
	);
}
export default Wallet