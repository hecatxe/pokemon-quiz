import { motion } from "framer-motion";

const PokemonCard = ({ pokemon, onRestart }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto"
    >
      <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100 opacity-90">
            Personalidad: {pokemon.tag}
          </span>
        </div>
        <div className="p-8 flex flex-col items-center">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">
            {pokemon.nombre}
          </h2>

          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-colors"></div>
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              src={imageUrl}
              alt={pokemon.nombre}
              className="w-64 h-64 object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 mb-8">
            <p className="text-slate-300 text-center leading-relaxed text-lg italic">
              "{pokemon.descripcion}"
            </p>
          </div>
          <button
            onClick={onRestart}
            className="w-full py-4 px-6 bg-white text-slate-900 font-bold rounded-xl hover:bg-emerald-400 transition-colors duration-300 shadow-lg active:scale-95"
          >
            ¿Probar de nuevo?
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;
