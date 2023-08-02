import DefaultPage from "components/DefaultPage"
import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import NaoEncontrada from "pages/NaoEncontrada"
import Player from "pages/Player"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function AppRoutes() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<DefaultPage />}>
                    <Route index element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />}/>
                    <Route path="/:id" element={<Player />}/>
                    <Route path="*" element={<NaoEncontrada />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}