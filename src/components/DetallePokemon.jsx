import "./Detalle.css";
const DetallePokemon = ({ mostrar, pokemon, close }) => {
  return (
    <div
      className="modal-container"
      onClick={close}
      style={{ display: mostrar ? "grid" : "none" }}
    >
      <section className="modal-body">
        <div className="imagen-container">
          <img
            src={pokemon.src}
            className="imagen-detalle"
            alt={pokemon.name}
          />
          <section>
            {pokemon.types?.map((type) => (
              <span className="tag" key={pokemon.id}>
                {type}
              </span>
            ))}
          </section>
        </div>
        <div className="data">
          <h2 className="titulo">
            {pokemon.name} {pokemon.id}
          </h2>

          <h3 className="titulo-seccion">Habilidades</h3>
          {pokemon.abilities?.map((ability) => (
            <span className="tag" key={pokemon.id}>
              {ability}
            </span>
          ))}

          <h3 className="titulo-seccion">Estadisticas</h3>
          <div className="stats">
            {pokemon.stats?.map(stat => 
              <section key={pokemon.id}>
                <span className="puntos" >{stat.base}</span>
                <span>{stat.name}</span>
              </section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetallePokemon;
