
// function App() {
//   function pad(number){
//     return number<10 ? '0'+number : number;
//   }

//   function getCurrentTime(){
//     const now = new Date();
//     const hours = pad(now.getHours());
//     const minutes = pad(now.getMinutes());
//     const seconds = pad(now.getSeconds());
//     return `${hours}:${minutes}:${seconds}`;
//   }
//   const interval = setInterval(()=>{
//     const ck = document.getElementById("clk");
//     ck.innerHTML = getCurrentTime();
//   },1*1000);

//   return (
//     <>
//       <div className="container" 
//       style={{
//         margin : '0px',
//         padding: '0px',
//         backgroundImage: 'linear-gradient(120deg, #3494E6, #EC6EAD)',
//         height: '100vh',
//         width: '100vw',
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center'
//       }}>
//         <div className="clock-body"
//           style={{
//             backgroundColor: 'white',
//             margin: '20px',
//             padding: '0px',
//             borderRadius: '15px',
//             width: '700px'
//           }}>
//             <div className="clock" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//               <h1 id='clk' style={{fontSize: "100px"}}></h1>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // Function to pad single digit numbers with a leading zero
  function pad(number) {
    return number < 10 ? '0' + number : number;
  }

  // Function to get the current time in HH:MM:SS format
  function getCurrentTime() {
    const now = new Date();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  // Effect to set up the interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="clock-body"
        style={{
          backgroundColor: 'white',
          margin: '20px',
          padding: '20px',
          borderRadius: '15px',
          textAlign: 'center',
          width: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <h1 id="clk" style={{ fontSize: "100px" }}>{currentTime}</h1>
      </div>
    </div>
  );
}

export default App;
