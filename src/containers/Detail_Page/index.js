import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BreadCrumb,
  HeartIcon,
  RecommendedMovies,
  WatchlistIcon,
} from "../../components";
import "./style.scss";
import { Row, Col } from "antd";
function DetailPage() {
  const { id, page } = useParams();
  const [CurrentMovie, SetCurrentMovie] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=19d5dcc0918f5300be53acc029f125ef&language=en-US`
      )
      .then((res) => res.data)
      .then((res) => SetCurrentMovie(res));
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      {CurrentMovie && (
        <div>
          <Row className="Detail-Background">
            <img
              src={
                CurrentMovie.backdrop_path &&
                `https://image.tmdb.org/t/p/original/${CurrentMovie.backdrop_path}`
              }
              alt=""
            />
            <Col xs={24} sm={24} md={24} lg={11} className="Detail-title">
              <BreadCrumb page={page} CurrentMovie={CurrentMovie} />
              <h1>{CurrentMovie.title}</h1>
            </Col>
          </Row>

          <Row
            className="Details-more"
            justify="center"
            gutter={[{ xs: 0, sm: 0, md: 20, lg: 30 }, 34]}
          >
            <Col xs={24} md={12} lg={10}>
              <div className="Detail-img">
                <img
                  src={
                    CurrentMovie.poster_path &&
                    `https://image.tmdb.org/t/p/original/${CurrentMovie.poster_path}`
                  }
                  alt=""
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={{ span: 11, push: 1 }}>
              <div className="Detail-text">
                <h2>{CurrentMovie.tagline}</h2>
                <p className="overview">{CurrentMovie.overview}</p>

                <div className="icon_row">
                  <span className="star">
                    <i className="fa-regular fa-star"></i>
                    {CurrentMovie.vote_average} ({CurrentMovie.vote_count} vote)
                  </span>
                  <HeartIcon movie={CurrentMovie} />
                  <WatchlistIcon movie={CurrentMovie} />
                </div>
                <ul className="DetailUl">
                  <li>
                    <p>Production Companies:</p>
                    <h3>
                      {CurrentMovie.production_companies &&
                        CurrentMovie.production_companies.map(
                          (company, index) => (
                            <span key={index}>
                              {index > 0 ? " , " : ""}
                              {company.name}
                            </span>
                          )
                        )}
                    </h3>
                  </li>

                  <li>
                    <p>Release Date:</p>
                    <h3> {CurrentMovie.release_date}</h3>
                  </li>
                  <li>
                    <p>Run time:</p>
                    <h3> {CurrentMovie.runtime} min</h3>
                  </li>

                  <li>
                    <p>Genres:</p>
                    <h3>
                      {CurrentMovie.genres &&
                        CurrentMovie.genres.map((genre, index) => (
                          <span key={index}>
                            {index > 0 ? " , " : ""}
                            {genre.name}
                          </span>
                        ))}
                    </h3>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <div className="recommended_row">
            <h1>Recommended Movies</h1>
            <RecommendedMovies id={CurrentMovie.id} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
