let watchlistArray = JSON.parse(localStorage.getItem("Watchlist"))
  ? JSON.parse(localStorage.getItem("Watchlist"))
  : [];

function watchlist(state = watchlistArray, action) {
  switch (action.type) {
    case "Add_To_Watchlist":
      return (state = [...state, action.payload]);

    case "Remove_From_Watchlist":
      return (state = state.filter((film) => film.id !== action.payload));

    default:
      return state;
  }
}

export default watchlist;
