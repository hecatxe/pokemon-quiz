import { motion } from "framer-motion";

const OpcionCard = ({ texto, indice, alHacerClick }) => {
  const letra = String.fromCharCode(65 + indice);
  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.95 }}
      onClick={alHacerClick}
      className="group w-full flex items-center p-4 rounded-2xl bg-slate-700/30 border border-slate-600 
                 hover:bg-slate-600/50 hover:border-emerald-500 transition-all duration-200 text-left shadow-lg"
    >
      <div
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 
                      text-slate-400 font-bold border border-slate-700 group-hover:bg-emerald-500 
                      group-hover:text-slate-900 group-hover:border-emerald-400 transition-colors"
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
