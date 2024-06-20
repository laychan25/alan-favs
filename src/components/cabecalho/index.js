import { Link } from "react-router-dom";
import logo1 from  './logo1.png'
import styles from './cabecalho.module.css'
import CabecalhoLink from "./CabecalhoLink";

function Cabecalho (){
    return(
          <header className={styles.cabecalho}>
            <Link to= "./"> 
            </Link>
            <div className={styles.div}>
            <img src={logo1} alt="logo do cinetag" className={styles.logo1} />
            </div>
            <nav>
                <CabecalhoLink url="./" >
                   Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                   Favoritos
                </CabecalhoLink>
            </nav>


          </header>
    )
}

export default Cabecalho