// import Header from "./composant/Header";
// import './App.css';

// function App() {
//   return (
//     <div>
//       <Header/>
//     </div>
//   );
// }

// export default App;

import React,{useState} from 'react'
 function Header(){ 
  const [nom,setNom]=useState('Mériadeck')
  return(
    <div>
      <h1>Le site de : {nom}</h1>
    </div>
  )
}
export default Header
