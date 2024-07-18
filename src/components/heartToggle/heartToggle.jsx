// Tapşırıq 7: İstifadəçi bir ürək ikonuna klikləyərək bir elementi favori edə bilsin və ya favoridən çıxara bilsin. İkon vəziyyətə görə dolu və ya boş görünsün. 

import { useState } from "react"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


function HeartToggle() {
    const [isFavorite, setIsFavorite]=useState(false)

    const toggleFavorite=()=>{
        setIsFavorite(!isFavorite)
    }


  return (
    <div>
      <button onClick={toggleFavorite}>{isFavorite?<CiHeart />:<FaHeart />}</button>
    </div>
  )
}

export default HeartToggle

