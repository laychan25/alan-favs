import styles from "./inicio.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import Texto from "components/Texto";
import { useEffect, useState } from "react";

function Inicio() {
  const [videos, setVideos]= useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/laychan25/videos-api/videos')
      .then((resposta) => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Texto texto="Um lugar para guardar seus videos e filmes!" />
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
