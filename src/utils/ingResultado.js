import { POKEMON_DB } from "../data/listaPokemon";

export const getPokemonFinal = (preguntasTags) => {

  const normalizar = (str) =>
    str?.toString().trim().toLowerCase();

  const tagsLimpios = preguntasTags
    .filter(t => typeof t == "string")
    .map(t => normalizar(t));

  const count = tagsLimpios.reduce((acum, tag) => {
    acum[tag] = (acum[tag] || 0) + 1;
    return acum;
  }, {});

  const maxVotos = Math.max(...Object.values(count));
  const tagsGanadores = Object.keys(count).filter(
    tag => count[tag] == maxVotos
  );

  const tagFinal =
    tagsGanadores[Math.floor(Math.random() * tagsGanadores.length)];

  console.log("TAG FINAL:", tagFinal);

  const candidatos = POKEMON_DB.filter((p) => {
    if (!p?.tag || !Array.isArray(p.tag)) return false;

    return p.tag.some(tag => normalizar(tag) === tagFinal);
  });

  if (candidatos.length == 0) {
    console.error("DEBUG: No hay coincidencias para el tag:", tagFinal);

    const indiceAleatorio = Math.floor(Math.random() * POKEMON_DB.length);
    return POKEMON_DB[indiceAleatorio];
  }

  return candidatos[Math.floor(Math.random() * candidatos.length)];
};