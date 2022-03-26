let wishlistArrary = JSON.parse(localStorage.getItem("Wishlist"))
  ? JSON.parse(localStorage.getItem("Wishlist"))
  : [];

function wishlist(state = wishlistArrary, action) {
  switch (action.type) {
    case "Add_To_Wishlist":
      return (state = [...state, action.payload]);

    case "Remove_From_Wishlist":
      return (state = state.filter((film) => film.id !== action.payload));

    default:
      return state;
  }
}

export default wishlist;
