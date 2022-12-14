import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow }) {
  /** state like a short time memory to keep track : to write*/
  const [movies, setMovies] = useState([]);
  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [] , run once when the row loads , and dont run again
    // you have to include any var that been pulled from out side
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.table(movies);
  return (
    <div className="row">
      <h2 className="title b_txt"> {title} </h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className= {`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow? movie.poster_path :movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
