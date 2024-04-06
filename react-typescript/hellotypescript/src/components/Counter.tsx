import { useState } from "react"
import UserID from "./UserID"

export default function Counter() {

    const [counter,setCounter]=useState(0)


    const incrementar= (numero: number = 1): void => {
        setCounter(counter + numero)
    }



  return (
    <>
    <div>
        <button onClick={()=>incrementar()}>Contador</button>

      <h1>{counter}</h1>

    </div>
    <div className="board">
        <button onClick={()=>incrementar(2)}> +2</button>
        <button onClick={()=>setCounter(0)}> reset</button>

    </div>
        <hr />


        <UserID>

        </UserID>
       
    </>
  )
}
