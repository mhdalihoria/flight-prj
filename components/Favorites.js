// import { ContextObj } from "@/Context";
import { useEffect, useContext, useState } from "react";
import FavElements from "./FavElements";

export default function Favorites() {
    const [savedFavs, setSavedFavs] = useState(null)
    
    useEffect(() => {
        setSavedFavs(JSON.parse(localStorage.getItem('favs')))
    }, [])
  
    console.log(savedFavs)
    const favElements = savedFavs?.map((item, index) => {
        return <FavElements key={index} {...item}/>
    })
    return (
    <div>
      <br />
      <br />
      <span>favs {savedFavs?.length}</span>
      <span>{favElements}</span>
      <br />
      <br />
    </div>
  );
}
