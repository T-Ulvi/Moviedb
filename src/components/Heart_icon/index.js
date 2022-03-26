import React from "react";
import AddWishlist from "../../utils/AddWishlist";
import { useDispatch, useSelector } from "react-redux";

function HeartIcon({ movie }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <span
      className="heart"
      onClick={() => AddWishlist(movie, wishlist, dispatch)}
    >
      {wishlist.find((wishFilm) => wishFilm.id === movie.id) ? (
        <i className="fa-solid fa-heart"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </span>
  );
}

export default HeartIcon;
