import { gql } from '@apollo/client';

export const GET_ALL_MOVIES = gql`
  query AllMovies {
    allFilms {
      films {
        id
        episodeID
        title
      }
    }
  }
`;

export const GET_MOVIE_WITH_STARSHIPS_INFO = gql`
  query GetMovie($filmID: ID!) {
    film(id: $filmID) {
      id
      episodeID
      title
      starshipConnection {
        starships {
          id
          name
          model
          manufacturers
          costInCredits
          length
          maxAtmospheringSpeed
          crew
          passengers
          starshipClass
          filmConnection {
            films {
              id
              episodeID
              title
            }
          }
        }
      }
    }
  }
`;

export const GET_MOVIE_WITH_ALL_STARSHIPS_INFO = gql`
  query GetShip($shipID: ID!) {
    starship(id: $shipID) {
      id
      name
      model
      manufacturers
      costInCredits
      length
      maxAtmospheringSpeed
      crew
      passengers
      starshipClass
      filmConnection {
        films {
          episodeID
          title
        }
      }
    }
  }
`;

export const GET_ALL_STARSHIPS = gql`
  query GetStarships {
    allStarships {
      starships {
        id
        name
        model
        manufacturers
        costInCredits
        length
        maxAtmospheringSpeed
        crew
        passengers
        starshipClass
        filmConnection {
          films {
            episodeID
            title
          }
        }
      }
    }
  }
`;
