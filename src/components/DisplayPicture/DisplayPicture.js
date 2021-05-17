import React from "react";
import * as styles from "./DisplayPicture.module.scss";
// import DisplayPhoto from "../../assets/DisplayPhoto2.jpg"
import DisplayPhoto from "../../assets/Dp.jpg"


const DisplayPicture=()=>{
    
return(
    <div className={styles.displayPicture}>
        <figure>
            <img  src={DisplayPhoto} alt="Display Picture"></img>
        </figure>
    </div>
)
    }

export default DisplayPicture;