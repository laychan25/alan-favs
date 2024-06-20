import Favorito from "Pages/Favoritos"
import Inicio from "Pages/Inicio"
import NaoEncontada from "Pages/NaoEncontrada"
import PaginaBase from "Pages/PaginaBase"
import Player from "Pages/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes (){
    return(
     <BrowserRouter >
       <Routes>
        <Route path="/" element={<PaginaBase/>} >
        <Route index element={<Inicio />} ></Route>
        <Route path="favoritos" element={<Favorito />} ></Route>
        <Route path=":id" element={<Player />} ></Route>
        <Route path="*" element={<NaoEncontada />} ></Route>
        </Route>
       </Routes> 
     </BrowserRouter>
    )
}

export default AppRoutes