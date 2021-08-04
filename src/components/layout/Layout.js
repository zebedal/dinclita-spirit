import styles from './Layout.module.css'
import Header from './Header'

const Layout = props => (
    <div className={styles.wrapper}>
        <Header />
        {props.children}
    </div>
    
)

export default Layout