import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import Tarjeta from "../components/Tarjeta"

const HomePage = () => {

  const { allPokemons} = useContext(PokemonContext)

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center items-center  my-5">
      {allPokemons.map(pokemon => (
								<Tarjeta pokemon={pokemon} key={pokemon.id} />
							))}
      </div>
    </>
  )
}

export default HomePage
