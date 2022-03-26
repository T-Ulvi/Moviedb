import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddWatchlist from "../../utils/AddWatchlist";

function WatchlistIcon({ movie }) {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);

  return (
    <span
      className="watchList"
      onClick={() => AddWatchlist(movie, watchlist, dispatch)}
    >
      {watchlist.find((watchFilm) => watchFilm.id === movie.id) ? (
        <i className="fa-solid fa-bookmark"></i>
      ) : (
        <i className="fa-regular fa-bookmark"></i>
      )}
    </span>
  );
}

export default WatchlistIcon;
