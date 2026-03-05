import { useState } from "react";
import "./App.css";
import { getPokemonFinal } from "./utils/ingResultado";
import PokemonCard from "./components/Resultado/PokemonCard";
import Preguntas from "./components/Test/Preguntas";
import { questions } from "./data/preguntas";

function App() {
  const [inicio, setInicio] = useState(0);
  const [actualPregunta, setActualPregunta] = useState(0);
  const [userTags, setUserTags] = useState([]);
  const [pokemonFinal, setPokemonFinal] = useState(null);

  const manejarRespuesta = (tag) => {
    const newTags = [...userTags, tag];
    setUserTags(newTags);

    if (actualPregunta < questions.length - 1) {
      setActualPregunta((prev) => prev + 1);
    } else {
      const resultado = getPokemonFinal(newTags);
      console.log("Resultado obtenido:", resultado);
      setPokemonFinal(resultado);
      setInicio(2);
    }
  };

  const resetear = () => {
    setInicio(0);
    setActualPregunta(0);
    setUserTags([]);
    setPokemonFinal(null);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/video/pokemon-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10">
        {inicio == 0 && (
          <div className="text-center space-y-6">
            <h1 className="pokemonTitle text-4xl text-white font-bold">
              ¿Qué{" "}
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-white bg-clip-text text-transparent">
                Pokémon
              </span>{" "}
              de Teselia eres?
            </h1>
            <p className="text-black-400 text-lg pokemonSub">
              Descubre qué criatura de la quinta generación refleja tu
              personalidad.
            </p>
            <button
              className="
  px-10 py-3
  text-white font-semibold
  rounded-full
  bg-white/10
  backdrop-blur-md
  border border-white/20
  shadow-lg shadow-black/30
  hover:bg-white/20
  hover:scale-105
  transition-all duration-300
  font-sans
  "
              onClick={() => setInicio(1)}
            >
              Empezar Test
            </button>
          </div>
        )}

        {inicio === 1 && (
          <Preguntas
            preguntaActual={actualPregunta}
            totalPreguntas={questions.length}
            datosPregunta={questions[actualPregunta]}
            alResponder={manejarRespuesta}
          />
        )}
        {inicio === 2 && pokemonFinal && (
          <PokemonCard pokemon={pokemonFinal} onRestart={resetear} />
        )}
      </div>
      <div className="absolute bottom-4 right-4 text-white text-sm opacity-60">
        <span className="pokemonSub inline-flex items-center space-x-1 gap-1">
          Hecho con
          <img
            src="/img/corazon-pixel.png"
            alt="corazón"
            className="w-7 h-7 transition-transform duration-300 hover:scale-125"
          />
          por Fátima
        </span>
      </div>
    </div>
  );
}

export default App;
