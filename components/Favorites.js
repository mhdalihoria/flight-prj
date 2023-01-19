import { useEffect, useContext, useState } from "react";
import FavElement from "./FavElement";
import { ContextObj } from "@/Context";

export default function Favorites() {
  const [savedFavs, setSavedFavs] = useState(null);
  const [deleteFavs, setDeleteFavs] = useState(false);
  const { favItems, setFavItems } = useContext(ContextObj);

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

  console.log(savedFavs);
  const favElements = favItems?.map((item, index) => {
    return <FavElement key={index} {...item} />;
  });
  return (
    <div>
      <br />
      <br />
      <button onClick={clickHandler}>Delete All</button>
      <span>favs {favItems?.length}</span>
      <span>{favElements}</span>
      <br />
      <br />
    </div>
  );
}
