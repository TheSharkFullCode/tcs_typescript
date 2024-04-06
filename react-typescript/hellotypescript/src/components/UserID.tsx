import { useState } from "react"


interface User{

    uid:string
    name:string
}

function UserID() {

    const [user,setUser]=useState<User>()
    

    const login =()=>{

        setUser({
            uid:'ABC123',
            name:'danilo',
        })

    }

  return (
    <>
    <h2>user: state</h2>
    <div>

        <button onClick={login}>login</button>
    </div>
    <pre>{JSON.stringify(user)}</pre>
    </>

  )
}

export default UserID