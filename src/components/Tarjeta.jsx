

const Tarjeta = () => {
  return (
    <>
        <article class="card h-[45vh] w-[22vw] border-2 rounded-[20px]  shadow-md">
        <img src="https://card-poke-simple.netlify.app/images/bg-pattern-card.svg" alt="imagen header card" class="rounded-t-[20px]"/>
        <div class="card-body flex  flex-col justify-center items-center ">
            <img class="h-[20vh] w-[15vw] mt-[-10vh] border-[5px] border-white rounded-[50%] bg-white" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/117.svg" alt="imagen de vitoko"/>
            <h1 class="card-body-title"><span class="font-bold">seadra </span>55hp</h1>
            <p class="card-body-text">154 exp</p>
        </div>
        <div class="flex text-xs pt-5 items-center justify-center border-t-[1px] gap-5">
            <div class="card-footer-socia  text-center">
                <h3 class="font-bold">65K</h3>
                <p>Ataque</p>
            </div>
            <div class="card-footer-social  text-center">
                <h3 class="font-bold">95K</h3>
                <p>Ataque Especial</p>
            </div>
            <div class="card-footer-socia  text-centerl">
                <h3 class="font-bold">95K</h3>
                <p>Defensa</p>
            </div>
        </div>
    </article>
    </>
  )
}

export default Tarjeta
