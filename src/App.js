
import { useEffect, useState } from 'react';
import './App.css';
import Comic from './component/comicPage';
//import Random from './component/Random';
function App() {
//  const[randarr,setRandarr] =useState([]);
//   useEffect(()=>{
//     let temparr=[];
//     for(let i=0;i<4;i++){
//       temparr.push(Math.floor((Math.random() * 400) + 1));
//     }
//     setRandarr(temparr)
//   },[])
  return (
    <div className="App">
    <Comic/>
    </div>
  );
}

export default App;
