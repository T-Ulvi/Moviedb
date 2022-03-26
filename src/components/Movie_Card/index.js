import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { HeartIcon } from "../index";
import { WatchlistIcon } from "../index";
function Card({ movie, page }) {
  return (
    <div className="MovieCard">
      <Link to={`/detail/${page}/${movie.id}`} className="MovieCard-img">
        <span className="star">
          <i className="fa-regular fa-star"></i>
          {Number(movie.vote_average).toFixed(1)}
        </span>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
        />
      </Link>
      <HeartIcon movie={movie} />
      <div className="MovieCard-text">
        <h3 className="Movie-title">
          {movie.title.length > 20
            ? movie.title.slice(0, 20) + "..."
            : movie.title}
        </h3>
        <WatchlistIcon movie={movie} />
      </div>
    </div>
  );
}

export default Card;
