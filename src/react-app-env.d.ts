/// <reference types="react-scripts" />

type Params = {
  episodeid?: string;
  shipid?: string;
};

type Film = {
  id: string;
  episodeID: number;
  src?: string;
  title: string;
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
  starShipClass: string;
};

type Poster = {
  episodeID: number;
  src: string;
};

type ActionReducer = {
  type: string;
  payload?: any;
};
