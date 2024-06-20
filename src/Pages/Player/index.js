import Banner from "components/Banner";
import styles from "./Player.module.css";
import Texto from "components/Texto";
import { useParams } from "react-router-dom";
import NaoEncontada from "Pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
    const [video, setVideo] = useState()
    const params = useParams();
    
    useEffect(()=>{
   
    fetch(`https://my-json-server.typicode.com/laychan25/videos-api/videos?id=${params.id}`)
    .then(resposta => resposta.json())
    .then(dados =>{
        setVideo(...dados)
    })
},[])

    if (!video){
        return <NaoEncontada />
    }
    return <>
           <Banner imagem='favoritos' />
           <Texto texto='Player' />
           <section className={styles.container}>
           <iframe width="100%"
            height="100%"
             src={video.link} 
             title={video.titulo}
              frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
                </iframe>
           </section>
           </>;
    }

export default Player;
