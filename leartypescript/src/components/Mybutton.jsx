import React, { useState } from 'react'

function Mybutton() {
  const [count,setCount]=useState(0);

  const handleCounter=()=>{
    setCount(count +1)
  }

  return (
    <div>
      <button onClick={()=>handleCounter()}>Sumar</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Mybutton
