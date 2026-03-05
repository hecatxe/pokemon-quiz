import { motion } from "framer-motion";

const PokemonCard = ({ pokemon, onRestart }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col md:flex-row">
        <div className=" p-4 text-center md:text-left md:flex md:items-center md:justify-center md:w-48">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white opacity-90">
            Personalidad: {pokemon.tag}
          </span>
        </div>
        <div className="p-6 flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-6">
          <div className="relative group shrink-0 flex items-center justify-center h-full">
            <div className="absolute inset-0 bg-neutral-500/20 rounded-full blur-3xl group-hover:bg-neutral-400/30 transition-colors"></div>
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              src={imageUrl}
              alt={pokemon.nombre}
              className=" w-55 h-55 object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="flex flex-col flex-1">
            <h2 className="pokemonTitle text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight flex justify-center">
              {pokemon.nombre}
            </h2>

            <div className="bg-slate-900/50 rounded-2xl p-4 md:p-6 border border-slate-700/50 mb-4 md:mb-6">
              <p className="text-slate-300 text-center md:text-left leading-relaxed text-lg italic">
                "{pokemon.descripcion}"
              </p>
            </div>
            <button
              onClick={onRestart}
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
            >
              ¿Probar de nuevo?
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;
