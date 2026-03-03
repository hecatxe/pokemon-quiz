import { useState } from "react";
import "./App.css";
import {getPokemonFinal} from "./utils/ingResultado";
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
    <div className="min-h-screen flex items-center justify-center p-4">
      {inicio == 0 && (
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            ¿Qué Pokémon de Teselia eres?
          </h1>
          <p className="text-slate-400 text-lg">
            Descubre tu identidad en la 5ª Generación
          </p>
          <button
            className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-white/10"
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
  );
}

export default App;
