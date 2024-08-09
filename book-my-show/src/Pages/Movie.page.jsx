import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const {id} = useParams();

  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.result);
    };
    requestSimilarMovies();
  },[id]);
  return (
      <div>MoviePage</div>
  )
}

export default MoviePage;