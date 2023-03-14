import Style from "../styles/Signin.module.css"
import Navlogo from "../components/navlogo"
import { NavLink } from "react-router-dom"



const Signin = () => {

    return <>
        <div className={Style.businessWrapper}>
            <div className={Style.logo}>
                <Navlogo/>
            </div>

            <div className={Style.formWrapper}>
                <div className={Style.heading}>
                    <h2>Login</h2>
                </div>

                <form action="">
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">Your email *</label>
                        <input type="text" placeholder="Your Email"/>
                        <p className={Style.error}></p>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">password *</label>
                        <input type="password" placeholder="Password"/>
                        <p className={Style.error}></p>
                    </div>
                    <div className={Style.buttonWrapper}>
                        <button type="submit">Sign In</button>
                    </div>

                    <div className={Style.rememberMe}>
                        <div className={Style.terms}>
                            <input type="checkbox" />
                            <label htmlFor="">Remeber me</label>
                        </div>
                        <p>Forgot Password?</p>
                    </div>

                </form>
                <div className={Style.lastText}>
                    <p>Don't have an account?  <NavLink to="/getstarted">Create New Account</NavLink></p>
                </div>
            </div>
        </div>

    </>
}

export default Signin