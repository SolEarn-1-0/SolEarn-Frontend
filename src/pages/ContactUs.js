import Style from "../styles/Contactus.module.css";
import {IoIosChatbubbles} from "react-icons/io"
import {ImOffice} from "react-icons/im"
import {BsFillTelephoneFill} from "react-icons/bs"
import Navbar from "../components/Navbar"

const Contactus = () => {

    return <>
    <Navbar/>
        <div className={Style.body}>
            <div className={Style.hero}>
                <section className={Style.left}>
                    <div className={Style.wrapper}>
                        <IoIosChatbubbles/>
                        <div className={Style.info}>
                            <h3>Chat to us</h3>
                            <p>Our friendly team is here to help</p>
                            <p>Logo@gmail.com</p>
                        </div>
                    </div>
                    <div className={Style.wrapper}>
                        <ImOffice/>
                        <div className={Style.info}>
                            <h3>Office</h3>
                            <p>Visit us a our office HQ</p>
                            <p>Aptech Computer Education, Besides Shell I.A Port Harcourt</p>
                        </div>
                    </div>
                    <div className={Style.wrapper}>
                        <BsFillTelephoneFill/>
                        <div className={Style.info}>
                            <h3>Phone</h3>
                            <p>Feel free to reach us on phone from Mon - Fri, 8am - 6pm</p>
                            <p>+2348104009853</p>
                        </div>
                    </div>
                </section>

                <section className={Style.right}>
                    <div className={Style.header}>
                        <h1>Get in Touch</h1>
                        <p>Feel free to get in contact with us any questions or issues you have.</p>
                    </div>
                    <form action="">
                        <div className={Style.inputWrapper}>
                            <label for="name">Name:</label>
                            <input type="text" placeholder="John Doe" required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label for="email">Email Address:</label>
                            <input type="email" placeholder="abc@gmail.com" required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label for="name">How can we help?</label>
                            <textarea name="help" id="" cols="30" rows="7" placeholder="Brief us on your questions or report" required></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </section>
            </div>
        </div>
    </>

}

export default Contactus
