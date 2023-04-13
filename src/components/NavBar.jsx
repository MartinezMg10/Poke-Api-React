import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { PokemonContext } from "../context/PokemonContext"



const NavBar = () => {

  const {} = useContext(PokemonContext)
  return (
    <>
        <nav className="flex flex-col w-[100%] flex-wrap justify-center items-center">
            <Link to="/">
            <img className="h-[100px] w-[20vw]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>
            </Link>
            <div className="mt-5  h-[10vh] w-[50vw] rounded-2xl flex  bg-white border-2">
            <input type="text" placeholder="Buscar" className="outline-none  h-[9vh] w-[44vw] p-5 rounded-2xl "/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png"  className="h-[10vh] p-4" alt=""/>
            </div>
        </nav>

      <Outlet />
    </>
  )
}

export default NavBar
