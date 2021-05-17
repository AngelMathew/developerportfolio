import React,{useEffect}  from "react";
import * as styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";
import AOS from 'aos';
import "aos/dist/aos.css";

const Timeline=()=>{
    
        useEffect(() => {
            AOS.init({
            duration:'2000'
            });
            // AOS.refresh();
          }, []);
    return(
        <>
        
        <div className={styles.timeLine} id="timeline" > 
        <h2 className={styles.timelineHeading}>Experience</h2>

            <div className={styles.timelineParent} data-aos="fade-up" >
            <div className={styles.verticalLine}>
            </div>
            <TimelineItem/>
        </div>
         </div>
        </>
    )
}
export default Timeline;