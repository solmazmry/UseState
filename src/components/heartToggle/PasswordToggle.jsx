
// Tapşırıq 2: Bir input sahəsində daxil edilən parolu bir düymə ilə göstərib gizlədə bilən bir komponent yaradın.


import React, { useState } from 'react'

function PasswordToggle() {
    const[password,setpassword]=useState('')
    const[showPassword, setSohwPassword]=useState(false)
   const handleTogglePassword=()=>{
    setSohwPassword(!showPassword)
   }


  return (
    <div>
      <input type={showPassword?'text':'password'}

      value={password} onChange={(e)=>setpassword(e.target.value)} />
    <button onClick={handleTogglePassword}>
        {showPassword?'Gizle':"Goster"}
    </button>
    </div>
  )
}

export default PasswordToggle
