// Tapşırıq 1: Bir düyməyə klikləyərkən bir mətnin rəngini dəyişdirən bir React komponenti yaradın. İlk klikdə mətn qırmızı olsun, ikinci klikdə mavi olsun.

import React, { useState } from 'react'

function ColorClick() {
    const[color, setcolor ]=useState('black')
    const changeColor=()=>{
        setcolor(color==='red'?'blue':'red')
    }

  return (
    <div>
      <button onClick={changeColor}>Dəyişdir</button>
      <p style={{color}}>Mətnin rəngi dəyişdirin</p>
    </div>
  )
}

export default ColorClick
