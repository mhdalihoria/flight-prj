import { useEffect, useContext, useState } from "react";
import FavElement from "./FavElement";
import { ContextObj } from "@/Context";

export default function Favorites() {
  const [savedFavs, setSavedFavs] = useState(null);
  const [deleteFavs, setDeleteFavs] = useState(false);
  const { favItems, setFavItems } = useContext(ContextObj);
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    setSavedFavs(JSON.parse(localStorage.getItem("favs")));
  }, [favItems]);

  useEffect(() => {
    if (deleteFavs) {
      localStorage.removeItem("favs");
    }
  }, [deleteFavs]);

  const clickHandler = () => {
    setDeleteFavs(true);
    setFavItems([]);
  };


  const favElements = favItems?.map((item, index) => {
    return <FavElement key={index} {...item} />;
  });
  return (
    <div className="fav-container">
      <div className="fav-container-header">
        <span onClick={()=> setIsFavorited((prevFav) => !prevFav)}>Favorites ({favItems?.length})</span>
        {favItems?.length > 0 && <button onClick={clickHandler}>Delete All</button>}
      </div>
      <div className={`${isFavorited ? "show-favs" : "hide-favs"}`}><div className="fav-container-body">{favElements}</div></div>
    </div>
  );
}
