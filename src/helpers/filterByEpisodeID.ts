import postersFilms from './postersFilms';

export const filterByEpisodeID = (episodeID: number) =>
  postersFilms.filter((poster) => poster.episodeID === episodeID)[0];
