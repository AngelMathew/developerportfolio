import React,{useEffect} from "react";
import * as styles from "./Info.module.scss";
import DisplayPicture from "../../components/DisplayPicture/DisplayPicture";
import Button from "../Button/Button";
import Timeline from "../Timeline/Timeline";
import Skillset from "../../components/Skillset/Skillset";
import Arrow from "../../assets/Arrow.svg";
import AOS from 'aos';
import "aos/dist/aos.css";

const Info=()=>{
    useEffect(() => {
        AOS.init({
        duration:'3000'
        });
        // AOS.refresh();
      }, []);
    return(
        <>
            <div className={styles.info}  data-aos="fade-in">
                <div className={styles.infoSummary}>
                    <h4>Hi there <div className={styles.wave}>👋</div> ! my name is </h4>
                    <h1>Angel  Anna Mathew</h1>
                    <br></br>
                    <p>
                    I’m a  Toronto based front-end developer, who enjoys building smooth  UI/UX. I work with Angular/React to develop responsive, performant, and accessible web apps. Currently, I work at Bell Canada. 
                    </p>
                    <br></br>
                    <Button/>
                </div>
                <DisplayPicture/>
            </div>
            <Skillset/>
            <Timeline/>
        </>
    )
}

export default Info;