// Tapşırıq 2: Bir input sahəsində daxil edilən parolu bir düymə ilə göstərib gizlədə bilən bir komponent yaradın. 

import React, { useState } from 'react'

function PasswordGenerator() {
const[password ,setpassword]=useState("")
const handelPassword=()=>{
    const length=8;
    const charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
 
    const getRandom =()=> charset[Math.floor(Math.random()*charset.length)]
    const passwordGenerator=Array.from({length}, getRandom).join("")
    setpassword(passwordGenerator)
}

  return (
    <div>
      <button onClick={handelPassword}>Yarat</button>
      <p>yeni parola:{password}</p>
    </div>
  )
}

export default PasswordGenerator
