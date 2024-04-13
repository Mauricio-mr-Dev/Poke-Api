
import { Header } from "./components/Header";

import { Pokemones } from "./components/Pokemones";

function App() {
  
  // const [inputValue, setInputValue] = useState("");
  // const [selectPokemon, setSelectPokemon] = useState(false);
  // const [darkMode, setDarkMode] = useState(false); // Estado para controlar el modo oscuro

  // const onInputChange = ({ target }) => {
  //   setInputValue(target.value);
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(
  //     `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`
  //   );
  //   const inputPoke = await response.json();

  //   const foundPokemon = {
  //     id: inputPoke.id,
  //     name: inputPoke.name,
  //     src: inputPoke.sprites.other.dream_world.front_default,
  //   };
  //   setPokemones([foundPokemon]);
  // };

  // const click = (id) => {
  //   console.log("Seleccionaste el pokemon con id: ", id);
  //   setSelectPokemon(!selectPokemon);
  // };

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <>
      <Header />
     
      <Pokemones />
    </>
  );
}

export default App;
