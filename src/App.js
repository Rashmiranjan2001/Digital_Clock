import React, { useState } from 'react';




const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime,setCtime] = useState(time);

  const updateTime = () => {
     time = new Date().toLocaleTimeString();
     setCtime(time);
  }
  
  setInterval(updateTime,1000);

  return (
    <>
      <h2> Digital Clock</h2>
      <div className='kk'>
        <h1> {ctime} </h1>
      </div>
    </>
  );
}

export default App;