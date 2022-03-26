import { toast } from "react-toastify";
const AddWishlist = (film, wishlist, dispatch) => {

  let currentFilm = wishlist.find((item) => item.id === film.id);
  if (currentFilm) {
    dispatch({ type: "Remove_From_Wishlist", payload: film.id });
    toast("😟 Movie removed from wishlist!", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    dispatch({ type: "Add_To_Wishlist", payload: film });
    toast.success("Movie added to wishlist!", {
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

export default AddWishlist;
