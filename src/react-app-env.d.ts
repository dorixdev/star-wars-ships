/// <reference types="react-scripts" />

type Params = {
  episodeid?: string;
  shipid?: string;
};

type Film = {
  id: string;
  episodeID: number;
  title: string;
  src?: string;
  starshipConnection: {
    starships: Starship[];
  };
};

type Starship = {
  id: string;
  name: string;
  model: string;
  manufacturers: string[];
  costInCredits: number;
  length: number;
  maxAtmospheringSpeed: number;
  crew: string;
  passengers: string;
  starshipClass: string;
  filmConnection: {
    films: Film[];
  };
};

type Poster = {
  episodeID: number;
  src: string;
};

type ActionReducer = {
  type: string;
  payload?: any;
};

type FetchData = {
  name?: string;
  email?: string;
  password?: string;
};

type LoginState = {
  name?: string;
  email: string;
  password: string;
  remember?: boolean;
};
