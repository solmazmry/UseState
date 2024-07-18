// Tapşırıq 6: İstifadəçi məhsul əlavə edib çıxardıqca "Səbətdə X məhsul var" mesajını yeniləyən bir komponent yaradın. 

import React, { useState } from 'react'

function CardCounter() {
    const[count,setCount]=useState(0);
    const addItem=()=>{
        setCount(count+1)
    }
    const removeİtem=()=>{
        if(count>0)
            setCount(count-1)
    }
  return (
    <>
    <p> sebetde:{count} mehsul var</p>
    <button onClick={addItem }>Mehsulu elave et</button>
    <button onClick={removeİtem}>Mehsulu sil</button>
    </>
  )
}

export default CardCounter;