
import React, { useEffect, useState } from "react";
import axios from "axios";
// Sehifelerde deyisiklik olmadığı üçün eyni scss faylı işlədirəm
import "../Popular_Page/style.scss";
import { MovieCard } from "../../components";
import { Row, Col } from "antd";
function TopRated() {

  const [films,Setfilms]=useState([]);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=19d5dcc0918f5300be53acc029f125ef&language=en-US&page=1`)
    .then(res=>res.data).then(res=>Setfilms(res.results));
  },[]) 
  return (
    <div className='Popular'>
      <h1 className='page-title'>Top Rated Movies</h1>
      <Row className="film_container" gutter={[30,34]}>
        {
          films&&
          films.map((movie,index)=>(
            <Col key={index}  xs={24} sm={12} md={8} lg={6}>
            <MovieCard movie={movie} page="Top_Rated"/>
            </Col>
          ))
        }
      </Row>
     
    </div>
  )
}

export default TopRated;