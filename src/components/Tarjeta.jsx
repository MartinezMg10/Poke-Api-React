import { Link } from "react-router-dom";

const Tarjeta = ({ pokemon }) => {

  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`}>
        <article className="card h-[50vh] w-[22vw] border-2 rounded-[20px]  shadow-md bg-white">
          <img
            src="https://card-poke-simple.netlify.app/images/bg-pattern-card.svg"
            alt="imagen header card"
            className="rounded-t-[20px]"
          />
          <div className="card-body flex  flex-col justify-center items-center">
            <img
              className="h-[20vh] w-[15vw] mt-[-10vh] border-[5px] border-white rounded-[50%] bg-white"
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`Pokemon ${pokemon.name}`}
            />
            <h1 className="card-body-title">
              <span className="font-bold">{pokemon.name} </span>{pokemon.stats[0].base_stat} HP
            </h1>
            <p className="card-body-text">{pokemon.base_experience} exp</p>
          </div>
          <div className="flex text-xs pt-5 items-center justify-center border-t-[1px] gap-5">
            <div className="card-footer-socia  text-center">
              <h3 className="font-bold">{pokemon.stats[1].base_stat} K</h3>
              <p>Ataque</p>
            </div>
            <div className="card-footer-social  text-center">
              <h3 className="font-bold">{pokemon.stats[3].base_stat} K</h3>
              <p>Ataque Especial</p>
            </div>
            <div className="card-footer-socia  text-centerl">
              <h3 className="font-bold">{pokemon.stats[2].base_stat} K</h3>
              <p>Defensa</p>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Tarjeta;
