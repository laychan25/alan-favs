import Banner from 'components/Banner';
import Card from 'components/Card';
import styles from './Favorito.module.css'
import Texto from 'components/Texto';
import { useFavoritoContext } from 'context/Favoritos';

function Favorito (){
    const {favorito} = useFavoritoContext()
    return(
        <>
        <Banner imagem='favoritos' />
        <Texto texto='Meus favoritos'/>
        <section className={styles.container} >
           {favorito.map((fav)=>{
            return <Card {...fav} key={fav.id} />
           } )}
        </section>
        
        </>

    )
}

export default Favorito;