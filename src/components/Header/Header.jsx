import React, {useState} from 'react'
import styles from'./Header.module.css'
import menuBurger from '../../images/menuIcon.png'
import closeIcon from '../../images/closeIcon.png'
import { Link } from 'react-scroll'

const Header = () => {
    const [burger, setBurger] = useState(false);

  return (
    <header className={`${styles.header} ${styles.indentation}`}>
        <a className={styles.portfolio} href="/">Porfolio</a>
        <img src={burger ? closeIcon : menuBurger} onClick={() => setBurger(!burger)} className={styles.menuBurger} alt="" />
        <ul className={`${styles.headerList} ${burger ? styles.menuOpen : ''}`}>
            <li><Link to='about' offset={-150}  smooth={true}>About</Link></li>
            <li><Link  to='stack' offset={-150} smooth={true}>Stack</Link></li>
            <li><Link  to='projects' offset={-150} smooth={true}>Projects</Link></li>
            <li><Link  to='contact' smooth={true}>Contact</Link></li>
        </ul>
    </header>
)
}

export default Header