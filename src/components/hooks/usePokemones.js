import { useState, useEffect } from "react";

const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
const URL_ENDOPINT = 'https://pokeapi.co/api/v2/pokemon/'
function usePokemones() {

  const [pokemones, setPokemones] = useState([]);
  const [siguienteUrl, setSiguienteUrl] = useState('');
  const [verMas, setVerMas] = useState(true);

  const fetchPokemon = async (url) => {
    
    const resp = await fetch(url);
    //Aca ya tenemos la informacion en formato json lista para mapear y extraer la informacion1|
    const infoPokemon = await resp.json();
    //Aca recuperamos las otras propiedades de los pokemonos
    const abilities = infoPokemon.abilities.map(a => a.ability.name)
    //Devuelvo un objeto con las propiepades name y base
    const stats = infoPokemon.stats.map(s => {
      return { name: s.stat.name, base: s.base_stat }
    })

    const types = infoPokemon.types.map(t => t.type.name)

    return {
      id: infoPokemon.id,
      name: infoPokemon.name,
      src: infoPokemon.sprites.other.dream_world.front_default || infoPokemon.sprites.front_dafault,
      abilities,
      stats,
      types,
    };
  }


  const getPokemones = async (url = URL_DEFAULT) => {

    //Recuperamos el listado de los poquemones
    const response = await fetch(url);
    const objPokemones = await response.json();
    const { next, results } = objPokemones;

    //Ahora por cada result (pokemon), necesitamos guardar la informacion
    //Necestiamos esperar que se resuelvan todas las promesas
    //Por eso recurrimos a Promise.all

    const newPokemones = await Promise.all(
      results.map((pokemon) => fetchPokemon(pokemon.url))
    )

    //Retorno de la funcion newPokemones
    return { next, newPokemones }

  };

  const obtenerPokemones = async () => {
    const { next, newPokemones } = await getPokemones();
    setPokemones(newPokemones);
    setSiguienteUrl(next);
  }

  const masPokemones = async () => {
    const { next, newPokemones } = await getPokemones(siguienteUrl);
    setPokemones(prev => [...prev, ...newPokemones]);
    next === null && setVerMas(false);
    setSiguienteUrl(next);
  }

  const searchPokemon = async (busqueda) => {
    const url = `${URL_ENDOPINT}${busqueda.toLocaleLowerCase()}`
    return await fetchPokemon(url)
  }

  useEffect(() => { obtenerPokemones() }, []);


  //Retorno de el componente usePokemon
  return { pokemones, masPokemones, verMas,searchPokemon };
}

export default usePokemones;