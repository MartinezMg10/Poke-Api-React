import {BrowserRouter ,Routes ,Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/Homepage"
import  PokemonPage from "./pages/pokemonPage"
import { PokemonProvider } from "./context/PokemonProvider"

function App() {

  return (
    <>
    <PokemonProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
          <Route index element={<HomePage/>}/>
          <Route path="pokemon/:id" element={<PokemonPage/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
    </PokemonProvider>
    </>
  )
}

export default App
