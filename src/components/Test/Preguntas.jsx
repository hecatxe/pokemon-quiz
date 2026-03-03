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
      className="w-full max-w-2xl bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl border border-slate-700 shadow-2xl"
    >
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
            Pregunta {preguntaActual + 1} / {totalPreguntas}
          </span>
          <span className="text-slate-400 text-xs font-bold">
            {Math.round(progreso)}% Completado
          </span>
        </div>
        <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progreso}%` }}
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full"
          />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
        {datosPregunta.text}
      </h2>

      <div className="grid grid-cols-1 gap-4">
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
