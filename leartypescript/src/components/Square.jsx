import  { useState } from 'react'
import React from 'react'


function Square({}) {

    const [value,setValue]=useState(null);
    
    const handleClikc=()=>{
        setValue('x')
    }
    // const ButonReset=()=>{
    //     setValue('')
    // }

  return (
    <>
    <div>
        <button onClick={()=>handleClikc()}> {value}  </button>
    </div>

{/* 
    <div>
            <button onClick={ButonReset}>Reset</button>
    </div> */}

    </>
  )
}

export default Square