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
  query GetMovie($id: ID!) {
    film(id: $id) {
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
              episodeID
              title
            }
          }
        }
      }
    }
  }
`;
