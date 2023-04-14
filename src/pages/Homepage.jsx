import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import Tarjeta from "../components/Tarjeta"

const HomePage = () => {

  const {onClickLoadMore} = useContext(PokemonContext)
  const { allPokemons} = useContext(PokemonContext)

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center items-center  my-5">
      {allPokemons.map(pokemon => (
								<Tarjeta pokemon={pokemon} key={pokemon.id} />
							))}
      </div>
      <div className="flex justify-center items-center">
                <button className='h-[30px] w-[100px] bg-green-500' onClick={onClickLoadMore}>
                    Cargar más
                </button>
            </div>
    </>
  )
}

export default HomePage
