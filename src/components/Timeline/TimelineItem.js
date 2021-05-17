import React from "react";
import * as styles from "./Timeline.module.scss";
import Location from "../../assets/Location.svg"


const TimelineItem=()=>{

    const tooltipContent=[
        {
            "id":1,
            "duration":"Oct'19 - Now",
            "company":"Front-end developer @ <a href='https://www.bell.ca' target='_blank'>Bell Canada</a>",
            "location":"Toronto",
            "responsibilities":"<ul><li><span>Develop single page applications consuming server side JSON RESTful services.</span></li><li><span>Work with a wide range of languages, frameworks, and CMS  such as JavaScript, TypeScript, HTML, Modern (S)CSS,Angular, React, WordPress, Strapi and Contentful.</span></li><li><span>Work closely with UX designers, project managers , back-end developers to implement verstile solutions.</span></li></ul> ",
            "position":"tooltipRight"
        },
        {
            "id":2,
            "duration":"Jan'19 - July'19",
            "company":"Python Lab Assistant @ <a href='https://www.dal.ca/' target='_blank'>Dalhousie University</a>",
            "location":"Halifax,NS",
            "responsibilities":"<ul><li><span>Helped students understand algorithms and data structures.</span></li><li><span>upported students to debug and understand the Python code.</span></li><li><span>Assisted students with python language, Flask Framework, Git version control.</span></li></ul> ",
            "position":"tooltipLeft"
        },
        {
            "id":3,
            "duration":"Jan'18 - July'19",
            "company":"M.Eng in Internetworking @ <a href='https://www.dal.ca/' target='_blank'>Dalhousie University</a>",
            "location":"Halifax,NS",
            "responsibilities":"",
            "position":"tooltipRight"
        },
        {
            "id":4,
            "duration":"Nov'15 - Jan'18",
            "company":"Front-end developer @ <a href='https://www.tcs.com/' target='_blank'>TCS</a>",
            "location":"Kochi, India",
            "responsibilities":"<ul><li><span>Collaborated with back-end developers to integrate the front-end with the APIs.</span></li><li><span>Worked on Angular Material design along with AngularJS in creating the Application.</span></li><li><span>Accomplished initial learning in Android Mobile Application Development.</span></li></ul> ",
            "position":"tooltipLeft"
        },
        {
            "id":5,
            "duration":"Sep'11 - May'2015",
            "company":"B.Tech in Computer Science Engineering @ <a href='http://www.mace.ac.in/' target='_blank'>Mahatma Gandhi University</a> ",
            "location":"Kerala, India",
            "responsibilities":"",
            "position":"tooltipRight"
        }
    ]

const tooltipValue=tooltipContent.map((data)=>{

return(
    <div className={styles.timelineItem} key={data.id}>
    <div className={styles.circle}>
        <div className={`${styles[data.position]}`} >
            <h6 className={styles.duration}>{data.duration}</h6>
            <p className={styles.company} dangerouslySetInnerHTML= {{__html:`${data.company}`}}></p>
            <div className={styles.location}>
                <img src={Location} ></img>
                <b><h6>{data.location}</h6></b>
            </div>
            <div className={styles.tooltipSkillSet} dangerouslySetInnerHTML= {{__html:`${data.responsibilities}`}}></div>
        </div>
    </div>
</div>
)    
})
    return(
        <div className={styles.tooltipParent}>
        {tooltipValue}
        </div>
    )
}
export default TimelineItem;