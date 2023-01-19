import { createContext, useState, useEffect } from "react";
import { flightList } from "./mockDB";

const Context = createContext();

const ContextProvider = (props) => {
  const [search, setSearch] = useState();
  const [favItems, setFavItems] = useState(null);

  function addToFavs(itemId) {
    setFavItems((prevFavs) => {
      const filteredFlight = flightList.filter((flightItem) => {
        return flightItem.id === itemId;
      });

      if (typeof prevFavs === "undefined") {
        return filteredFlight;
      } else if (typeof prevFavs !== "undefined") {
        if (favItems.some((item) => filteredFlight[0] === item)) {
          return prevFavs;
        } else {
          return [...prevFavs, ...filteredFlight];
        }
      }
    });
  }

  useEffect(() => {
    setFavItems(() => JSON.parse(localStorage.getItem("favs")) || []);
  }, []);

  useEffect(() => {
    if (favItems !== null) {
      localStorage.setItem("favs", JSON.stringify(favItems));
    }
  }, [favItems]);

  return (
    <Context.Provider
      value={{ search, setSearch, addToFavs, favItems, setFavItems }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context as ContextObj };
