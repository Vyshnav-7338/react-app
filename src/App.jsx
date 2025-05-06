import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [count,setCount]= useState(0)

  useEffect(() => {
    const interval = setInterval(()=>{
      setCount(prev=>prev+1)
    },1000)

return()=>clearInterval(interval)
  }, [])
  
  return (
    <div>
      <h1>
        count: {count}
      </h1>

      <button onClick={()=>setCount(count-1)}>
        Count increment
      </button>
    </div>
)
}

export default App