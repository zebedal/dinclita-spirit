import styles from './YoutubeEmbed.module.css'
import ReactDOM from 'react-dom';
import React from 'react';



const YoutubeEmbed = ({ embedId, open, toggleVideo }) => {


    return (

        <React.Fragment>
            <div className={`${styles.backdrop} ${open ? styles.open : null}`} onClick={toggleVideo}></div>
            {ReactDOM.createPortal(
            <div className={`${styles['video-responsive']} ${open ? styles.open : null}`}>
                <div className={styles.videoHeader}>Close Player</div>
                <iframe
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>, document.getElementById('video'))}
        </React.Fragment>



    )

};



export default YoutubeEmbed;