import React from 'react'
import Square from './components/Square'
// import Square from './components/Square'


function Board() {

  return (
    <>
    <div className ="board">

        <Square/>            
        <Square/>
        <Square/>
         
  
    </div>
    <div className ="board">

        <Square/>            
        <Square/>
        <Square/>
         
  
    </div>
    <div className ="board">

        <Square/>            
        <Square/>
        <Square/>
         
  
    </div>
    </>
  )
}

export default Board