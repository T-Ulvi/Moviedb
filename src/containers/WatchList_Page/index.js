import React from "react";
import { MovieCard } from "../../components";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import "./style.scss";
function WatchlistPage() {
  const watchlist = useSelector((state) => state.watchlist);
  return (
    <div className="Watchlist_container">
      {watchlist.length ? (
        <div>
          <h1 className="page-title">Your watchlist</h1>
          <Row gutter={[30, 34]}>
            {watchlist.map((film, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <MovieCard movie={film} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <h1 className="empty">Your watchlist is empty</h1>
      )}
    </div>
  );
}

export default WatchlistPage;
