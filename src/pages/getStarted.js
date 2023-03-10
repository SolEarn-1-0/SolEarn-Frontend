import Style from "../styles/GetStarted.module.css"
import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"
import worker from "../Images/worker.svg"
import business from "../Images/business.svg"
import {BsArrowRightShort} from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const GetStarted = () => {
    const navigate = useNavigate()

    return <>
    <Navbar/>
        <div className={Style.getStartedWrapper}>
            <h1>Get started for free today</h1>

            <div className={Style.getStartedCardsWrapper}>
                <div className={Style.getStartedCards} onClick={() => navigate("/business/sign-up")}>
                    <img src={business} alt="" />
                    <div className={Style.getStartedContent}>
                        <p>Manage workers, create and fund payrolls, mange invoices, invoice other businesses</p>
                        <h2>Business Sign up</h2>
                        <NavLink to="/business/sign-up">Get Started <BsArrowRightShort/></NavLink>
                    </div>
                </div>
                <div className={Style.getStartedCards}  onClick={() => navigate("/worker/sign-up")}>
                    <img src={worker} alt="" />
                    <div className={Style.getStartedContent}>
                        <p>Get paid from any employer or client, send invoices to clients, direct deposit crypto to your crypto wallets and bank accounts</p>
                        <h2>Worker Sign up</h2>
                        <NavLink to="/worker/sign-up">Get Started <BsArrowRightShort/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default GetStarted