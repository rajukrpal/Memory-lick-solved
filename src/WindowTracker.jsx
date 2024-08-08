import React, { useEffect, useState } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // fiest tarika --------------------1

  // useEffect(()=>{
  //     window.addEventListener('resize',()=>{
  //         console.log("resize")
  //         setWindowWidth(window.innerWidth)
  //     })
  // },[])

  // second tarika -------------------2

  useEffect(() => {
    const watchWidth = () => {
        console.log("Setting up...")
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", watchWidth);

    return ()=>{ // memory lick se bacha ja skta hai
        console.log("Cleaning up...")
        window.removeEventListener('resize',watchWidth)
    }

  }, []);

  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
};

export default WindowTracker;
