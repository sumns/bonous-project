// import React, { useState, useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);


//   useEffect(() => {

//     const timer = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };

//   }, []);

//   return (
//     <div  className='counter'>

//       <h2>{count}  Second</h2> 
//     </div>
//   );
// }

// export default Counter;



import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);



  const formatTime = () => {
    const minutes = Math.floor(count / 60).toString()
    const seconds = (count % 60).toString()

    return <button> {minutes} minutes : {seconds} second </button>
  };

  return (
    <div className='counter'>
      <h1>Counter</h1>
      
      <p>{formatTime()}</p>
    </div>
  );
}

export default Counter;
