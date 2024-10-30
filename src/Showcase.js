import BublbasaurImg from "/src/images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  let favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };

  return (
    <div className="showcase-container">
      <h1>{favPokemon}'s Showcase component</h1>
      <img
        className="showcase-image"
        src={BublbasaurImg}
        alt={favPokemon}
        width="250"
      />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="green-bg-white-text">{pokeCharacteristics.type}</span>{" "}
        and one of their moves is{" "}
        <span className="white-bg-green-text">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
