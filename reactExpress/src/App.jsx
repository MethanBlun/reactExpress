import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'




function App() {
return (
  <div>
    <h1>Counters that update separately</h1>
    <MyButton />
    <MyButton />
  </div>
);
}

function MyButton() {
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
}

return (
  <button onClick={handleClick}>
    Clicked {count} times
  </button>
);
}


// function App() {
//   const [count, setCount] = useState(0)


//   return (
    
//     <>
//     function MyButton(params) {
      
      
//     }

    
//   function handleClick(){
//     setCount(count + 1)
//   }


//       <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
   
//     </>
//   )
// }

export default App
