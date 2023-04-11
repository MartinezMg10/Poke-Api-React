import {BrowserRouter ,Routes ,Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Tarjeta from "./components/Tarjeta"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}/>
        <Route index element={<Homepage/>}/>
        <Route path="pokemon/:id" element={<PokemonPage/>}/>
        <Route path="buscar" element={<BuscarPage/>}/>
      <Route/>

      <Route path="*" element={<Navigate to="/" />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


{/* <div class="flex flex-col justify-center items-center bg-[#f3f4f6] ">
      <div class="flex items-start mt-5">
        <NavBar/>
      </div>
    <div class="flex gap-5 p-5 flex-wrap justify-center items-center">
      <Tarjeta />
      <Tarjeta />
      <Tarjeta />
      <Tarjeta />
    </div>
  </div> */}
