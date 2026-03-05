import { motion } from "framer-motion";

const OpcionCard = ({ texto, indice, alHacerClick }) => {
  const letra = String.fromCharCode(65 + indice);
  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.95 }}
      onClick={alHacerClick}
      className="
    group w-full flex items-center p-4 rounded-2xl
    bg-white/5 backdrop-blur-md
    border border-white/20
    text-left text-white
    shadow-lg shadow-black/40
    hover:bg-white/10 hover:border-white/30
    transition-all duration-300
  "
    >
      <div
        className="pokemonSub flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 
                      text-slate-400 font-bold border border-slate-700 group-hover:bg-red-800 
                      group-hover:text-white group-hover:border-white/20 transition-colors"
      >
        {letra}
      </div>

      <span className="ml-4 text-slate-200 group-hover:text-white text-lg font-medium transition-colors">
        {texto}
      </span>
    </motion.button>
  );
};

export default OpcionCard;
