import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { useSelector } from "react-redux";
function Header() {
  const wishlist = useSelector((state) => state.wishlist);
  const watchlist = useSelector((state) => state.watchlist);
  const [fixed, Setfixed] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 150 ? Setfixed(true) : Setfixed(false);
  });
  return (
    <div className={fixed ? "header fixed" : "header"}>
      <div className="header-inner">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <ul className="menuUl">
          <li>
            <NavLink to={"/"}>Popular</NavLink>
          </li>
          <li>
            <NavLink to={"/now_playing"}>Now Playing</NavLink>
          </li>
          <li>
            <NavLink to={"/top_rated"}>Top Rated</NavLink>
          </li>
          <li>
            <NavLink to={"/upcoming"}>Upcoming</NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>
              {wishlist.length ? (
                <span className="counter">{wishlist.length}</span>
              ) : (
                ""
              )}
              <i className="fa-solid fa-heart-pulse"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/watchList"}>
              {watchlist.length ? (
                <span className="counter">{watchlist.length}</span>
              ) : (
                ""
              )}
              <i className="fa-solid fa-bookmark"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
