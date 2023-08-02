import styles from './Cabecalho.module.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import CabecalhoLink from './CabecalhoLink'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <div className={styles.content__container}>
            <Link to="/">
                <img src={logo} alt="Logo Cinetag" />
            </Link>  
            <nav>
                <CabecalhoLink 
                    to={"/"}
                    styles={styles}
                    children="Home"
                />
                <CabecalhoLink 
                    to={"/favoritos"}
                    styles={styles}
                    children="Favoritos"
                />
            </nav>
        </div>
    </header>
  )
}
