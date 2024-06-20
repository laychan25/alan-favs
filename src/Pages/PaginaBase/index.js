import Container from "components/Container"
import Rodape from "components/Rodape"
import Cabecalho from "components/cabecalho"
import FavoritoProvider from "context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase (){
    return(
        <main>
            <Cabecalho />
            <FavoritoProvider>
                <Container >
                    <Outlet/>
                </Container>
            </FavoritoProvider>
            <Rodape />

            
        </main>

    )
}

export default PaginaBase