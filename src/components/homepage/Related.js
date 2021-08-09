import styles from './Related.module.css'

const Related = ({ imgUrl, title, text }) => (
    <div className={styles['related-box']}>
        <div className={styles['related-box-img-wrapper']}>
            <img src={imgUrl} />
        </div>
        <h5>{title}</h5>
        <p>{text}</p>
        <p>
            <a href="#" style={{marginTop:'20px'}}>Saber mais<svg width="9.455" height="15.91" viewBox="0 0 9.455 15.91" >
                <path d="M13.5,20.668l5.834-5.834L13.5,9" transform="translate(-11.379 -6.879)" fill="none" stroke="#5b6533" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
            </a>
        </p>
    </div>
)

export default Related