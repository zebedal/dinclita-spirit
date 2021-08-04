import styles from './Header.module.css'
import Logo from '../svg/Logo'
import MenuToggler from '../svg/MenuToggler'

const Header = props => (
    <header>
        <div className="container">
            <span><Logo /></span>
            <span><MenuToggler /></span>
        </div>
    </header>
)

export default Header