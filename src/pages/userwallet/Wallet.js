import Navmenu from "../../components/dashboardcomp/Navmenu"
import './wallet.css'
import Chart from "../../components/dashboardcomp/chart"
const Wallet = () => {
  return (
    <div className="walletitems">
    <Navmenu/>
    <div className="walletrigt">
     <Chart/>
    </div>
    </div>
  )
}
export default Wallet