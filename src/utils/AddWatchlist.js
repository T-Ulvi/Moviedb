import { toast } from "react-toastify";

const Addwatchlist = (film, watchlist, dispatch) => {
  let currentFilm = watchlist.find((item) => item.id === film.id);
  if (currentFilm) {
    dispatch({ type: "Remove_From_Watchlist", payload: film.id });
    toast("Movie removed from watchlist!", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } 
  else {
    dispatch({ type: "Add_To_Watchlist", payload: film });
    toast.success("Movie added to watchlist!", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export default Addwatchlist;
