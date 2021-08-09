import styles from './Button.module.css'



const Button = ({text, margin}) => (
    <button className={`${styles.button} ${margin === 'left' ? styles.left : null}`}>
        {text}
        <svg width="7.714" height="13" viewBox="0 0 7.714 13">
            <path d="M1.468,0,0,1.528,4.768,6.5,0,11.472,1.468,13,7.714,6.5Z" fill="#fff" />
        </svg>
    </button>
)

export default Button;