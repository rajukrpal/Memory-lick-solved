import React, { useState } from 'react'
import WindowTracker from './WindowTracker'

const App = () => {
  const [isShow , setIsShow] = useState(true);

  const handleToggel = ()=>{
    setIsShow(!isShow)
  }
  return (
    <div>
       <div className="container">
            <button onClick={handleToggel}>
                Toggle WindowTracker
            </button>
           {/* {isShow ? <WindowTracker /> : ""} */} 
           {isShow && <WindowTracker /> }
        </div>
    </div>
  )
}

export default App
