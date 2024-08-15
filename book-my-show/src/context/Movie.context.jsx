import React, { createContext, useState } from "react";


export const movieContext = createContext([]);
const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvent, setOnlineStreamEvent] = useState([]);
  const value = {
    movie,
    setMovie,
    premierMovies, setPremierMovies,
    onlineStreamEvent, setOnlineStreamEvent,
  }
  return <movieContext.Provider value = {value}>{children}</movieContext.Provider>
};

export default MovieProvider;