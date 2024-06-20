import styles from './Texto.module.css'

function Texto ({texto}){
    return(
        <h3 className={styles.texto}>
            {texto} 
         </h3>
    )

}

export default Texto;