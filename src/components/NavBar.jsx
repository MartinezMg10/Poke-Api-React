import React from 'react'

const NavBar = () => {
  return (
    <>
        <nav class="flex flex-col w-[100%] flex-wrap justify-center items-center">
            <img class="h-[100px] w-[20vw]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>
            <div class="mt-5  h-[10vh] w-[50vw] rounded-2xl flex  bg-white">
            <input type="text" placeholder="Buscar" class="outline-none  h-[10vh] w-[44vw] p-5 rounded-2xl"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png"  class="h-[10vh] p-4" alt=""/>
            </div>
        </nav>
    </>
  )
}

export default NavBar
