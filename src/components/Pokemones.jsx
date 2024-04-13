import usePokemones from "./hooks/usePokemones";
import InfiniteScroll from "react-infinite-scroll-component";
import Cargando from "./Cargando";
import "./Pokemones.css";
import { useState } from "react";
import DetallePokemon from './DetallePokemon'
import Buscador from "./Buscador";

// {Este es un componente y recibe los parametros cuando hacemos el mapeo de los pokemones y este se llama dentro del map }
function Pokemon({ id, name, src, verPokemon}) {

  return (

    <div className="pokemon-card" onClick={verPokemon}>
      <img src={src} alt={name} className="pokemon-img" />
      <p className="pokemon-titulo">
        <span># {id}</span>
        <span>{name}</span>
      </p>
    </div>
  );
}

export const Pokemones = () => {

  //Obtenermos la informacion que retorna la funcion usePokemones
  const { pokemones, masPokemones, verMas,searchPokemon } = usePokemones();

  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} });
  const [busqueda, setBusqueda] = useState('')

  const verPokemon = (pokemon) =>  setMostrar({ mostrar: true, pokemon});

  const noVerPokemon = () => setMostrar({ mostrar: false, pokemon: {} });


  const busquedaPokemon= async(e)=>{
  e.preventDefault()
    if(!busqueda) return

    const pokemon = await searchPokemon(busqueda)
    setMostrar({mostrar:true, pokemon})
  }

  return (
    <>
      <DetallePokemon {...mostrar} close={noVerPokemon} />
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda}  busquedaPokemon={busquedaPokemon}/>
      <InfiniteScroll
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={verMas}
        loader={<Cargando />}
        endMessage={<h3>Lo siento no hay mas pokemones para mostrar</h3>}
        className="pokemon-container"
      >
        {pokemones.map((poke) => (
          <Pokemon 
          key={poke.id} 
          {...poke} 
          verPokemon={ () => {verPokemon(poke)} }/>
        ))}
      </InfiniteScroll>
    </>
  );
};
