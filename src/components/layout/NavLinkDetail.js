import styles from './NavLinkDetail.module.css'
import React, {useState} from 'react'


const NavLinkDetail = ({videoSrc, loadVideo}) => {

    const [videoUrl, setVideoUrl] = useState(false)

   
    import(`../../assets/video/${videoSrc}`).then(res => {
        setVideoUrl(res.default)
    });

  
    return(
        <div className={styles.wrapper}>
            <h5 className={styles['navlink-title']}>Nav Link Detail</h5>
            <p className={styles['navlink-text']}>Aliquip sint velit nostrud nulla adipisicing minim irure nisi velit amet sint fugiat quis eiusmod. </p>
            {loadVideo && <video className={`${styles.Video}`} controls >
                <source src={videoUrl} type="video/mp4" ></source>
            </video>}
        </div>
    )
}

export default NavLinkDetail