import Style from "../styles/Aboutus.module.css";
import Navbar from "../components/Navbar";
import {MdCollectionsBookmark} from "react-icons/md"

const Aboutus = () => {

    return <>
    <Navbar/>
        <div className={Style.aboutHero}>
            <div className={Style.heading}>
                <h1>We do things differently...</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tempora, animi iusto corporis ad sint sapiente eius exercitationem ab aspernatur laborum ea mollitia optio. Et optio facere repellat accusamus odit?</p>
            </div>
            <div className={Style.statWrapper}>
                <div className={Style.statCard}>
                    <h1>400+</h1>
                    <p>Projects completed</p>
                    <p>We've helped build over 400 projects with great companies</p>
                </div>
                <div className={Style.statCard}>
                    <h1>400+</h1>
                    <p>Projects completed</p>
                    <p>We've helped build over 400 projects with great companies</p>
                </div>
                <div className={Style.statCard}>
                    <h1>400+</h1>
                    <p>Projects completed</p>
                    <p>We've helped build over 400 projects with great companies</p>
                </div>
            </div>

            <div className={Style.valuesWrapper}>
                <div className={Style.valuesHeading}>
                    <p>Our values</p>
                    <h2>We're an ambitious and smart team with a shared mission</h2>
                    <p>Our shared values keep us connected and guide us as one team</p>
                </div>

                <div className={Style.valuesCardWrapper}>
                    <div className={Style.valuesCard}>
                        <MdCollectionsBookmark/>
                        <h3>Care about our team</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae perferendis quam doloribus eum a</p>
                    </div>
                    <div className={Style.valuesCard}>
                        <MdCollectionsBookmark/>
                        <h3>Care about our team</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae perferendis quam doloribus eum a</p>
                    </div>
                    <div className={Style.valuesCard}>
                        <MdCollectionsBookmark/>
                        <h3>Care about our team</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae perferendis quam doloribus eum a</p>
                    </div>
                    <div className={Style.valuesCard}>
                        <MdCollectionsBookmark/>
                        <h3>Care about our team</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae perferendis quam doloribus eum a</p>
                    </div>
                    <div className={Style.valuesCard}>
                        <MdCollectionsBookmark/>
                        <h3>Care about our team</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae perferendis quam doloribus eum a</p>
                    </div>
                    <div className={Style.valuesCard}>
                        <MdCollectionsBookmark/>
                        <h3>Care about our team</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae perferendis quam doloribus eum a</p>
                    </div>
                    
                </div>
            </div>
        </div>
    

    </>

}

export default Aboutus