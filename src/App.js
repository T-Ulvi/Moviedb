import "antd/dist/antd.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  NowPlaying,
  Popular,
  TopRated,
  DetailPage,
  WishlistPage,
  WatchlistPage,
  UpcomingPage,
} from "./containers";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import PuffLoader from "react-spinners/PuffLoader";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { Content } = Layout;

  const watchlist = useSelector((state) => state.watchlist);
  const wishlist = useSelector((state) => state.wishlist);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    localStorage.setItem("Watchlist", JSON.stringify(watchlist));
    localStorage.setItem("Wishlist", JSON.stringify(wishlist));
  }, [watchlist, wishlist]);

  return (
    <>
      {loading ? (
        <div className="loading">
          <PuffLoader color="#5dfd5d" loading={loading} size={150} />
        </div>
      ) : (
        <div className="App">
          <ToastContainer />
          <Header />

          <Content className="content">
            <Routes>
              <Route path="/" element={<Popular />} />
              <Route path="/now_playing" element={<NowPlaying />} />
              <Route path="/top_rated" element={<TopRated />} />
              <Route path="/upcoming" element={<UpcomingPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/watchlist" element={<WatchlistPage />} />
              <Route path="/detail/:page/:id" element={<DetailPage />} />
            </Routes>
          </Content>
        </div>
      )}
    </>
  );
}

export default App;
