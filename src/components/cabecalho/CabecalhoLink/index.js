import { Link } from 'react-router-dom';
import styles from './cabecalhoLink.module.css';


function CabecalhoLink ({url, children}){
   return(
      <Link to={url} className={styles.cabecalhoLink} >
        {children}

      </Link>
   )

}

export default CabecalhoLink;