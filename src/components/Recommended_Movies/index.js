import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { MovieCard } from "..";
function RecommendedMovies({ id }) {
  const [movies, Setmovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/696806/recommendations?api_key=19d5dcc0918f5300be53acc029f125ef&language=en-US&page=1`
      )
      .then((res) => res.data)
      .then((res) => Setmovies(res.results));
  }, [id]);

  return (
    <div>
      <Swiper
        style={{ padding: "0 8px" }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1440: {
            width: 1440,
            slidesPerView: 5,
          },
        }}
      >
        {movies.map((film, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={film} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecommendedMovies;
