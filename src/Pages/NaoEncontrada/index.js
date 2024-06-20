import styles from './NaoEncontada.module.css'

function NaoEncontada (){
    return(
        
        <section className={styles.container} >
            <h2>Opss...</h2>
            <p>O conteudo que voce procura nao foi encontrado!  </p>
        </section>

    )
}

export default NaoEncontada;