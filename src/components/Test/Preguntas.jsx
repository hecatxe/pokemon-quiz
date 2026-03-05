import { motion } from "framer-motion";
import OpcionCard from "./OpcionCard";

const Preguntas = ({
  preguntaActual,
  totalPreguntas,
  datosPregunta,
  alResponder,
}) => {
  const progreso = ((preguntaActual + 1) / totalPreguntas) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      key={preguntaActual}
      className="w-full max-w-4xl bg-slate-950/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
    >
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-red-500 pokemonSub text-sm uppercase tracking-widest">
            Pregunta {preguntaActual + 1} / {totalPreguntas}
          </span>
          <span className="text-slate-400 text-xs font-bold pokemonSub">
            {Math.round(progreso)}% Completado
          </span>
        </div>
        <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progreso}%` }}
            className="bg-gradient-to-r from-red-800 via-red-700 to-white h-full"
          />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-sans text-white mb-8 leading-tight">
        {datosPregunta.text}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {datosPregunta.options.map((opcion, index) => (
          <OpcionCard
            key={index}
            indice={index}
            texto={opcion.text}
            alHacerClick={() => alResponder(opcion.tag)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Preguntas;
