import Style from "../styles/business.module.css";
import Navlogo from "../components/navlogo";
// import {BsFillCaretDownFill} from "react-icons/bs";



const BusinessRegisteration = () => {

    return <>
        <div className={Style.businessWrapper}>
            <div className={Style.logo}>
                <Navlogo/>
            </div>

            <div className={Style.formWrapper}>
                <div className={Style.heading}>
                    <h2>Sign Up</h2>
                </div>

                <form action="">
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">Phone Number *</label>
                        <input type="text"  placeholder="Enter Mobile Number"/>
                        <p className={Style.error}>For multi factor authentication, you will receive an SMS to verify your number.</p>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">Admin email *</label>
                        <input type="text" placeholder="Admin Email"/>
                    </div>

                    <div className={Style.inputHolder}>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="">Admin first name *</label>
                            <input type="text" placeholder="Admin first name"/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="">Admin last name *</label>
                            <input type="text" placeholder="Admin last name"/>
                        </div>
                    </div>
                    

                    <div className={Style.inputHolder}>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="">password *</label>
                            <input type="password" placeholder="Password"/>
                            <p className={Style.error}>Password must be at least 6 characters.</p>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="">Repeat password *</label>
                            <input type="password" placeholder="Repeat Password"/>
                            <p className={Style.error}>Repeat Password must be at least 6 characters.</p>
                        </div>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">Country *</label>
                        <input type="text" placeholder="Repeat Password"/>
                        <p className={Style.error}>For multi factor authentication, you will receive an SMS to verify your number.</p>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">How did you find us *</label>
                        <input type="text" placeholder="Repeat Password"/>
                        <p className={Style.error}>For multi factor authentication, you will receive an SMS to verify your number.</p>
                    </div>
                    <div className={Style.terms}>
                        <input type="checkbox" />
                        <label htmlFor="">By signing up i agre to the Terms of use, Security and Disclosure and policies</label>
                    </div>
                    <div className={Style.buttonWrapper}>
                        <button>Sign Up</button>
                    </div>


                </form>
                <div className={Style.lastText}>
                    <p>Already have an account? Log in</p>
                </div>
            </div>
        </div>

    </>
}

export default BusinessRegisteration