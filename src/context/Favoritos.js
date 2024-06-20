import { createContext, useContext, useState } from "react";

export  const FavoritoContext  = createContext();
FavoritoContext.displayName = "Favoritos"

export default function FavoritoProvider({children}){
    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritoContext.Provider 
        value={{favorito, setFavorito}} >
            {children}
        </FavoritoContext.Provider>
    )

}

export function useFavoritoContext (){
    const {favorito, setFavorito} = useContext(FavoritoContext);

    function adicionarFavorito (novoFavorito){

        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

      let novaLista = [...favorito];

      if(!favoritoRepetido){
        novaLista.push(novoFavorito);
        return setFavorito(novaLista)
      }

      return setFavorito(novaLista.filter(favorito => favorito.id !== novoFavorito.id));
    }

    return{
        favorito,
        adicionarFavorito
    }
}