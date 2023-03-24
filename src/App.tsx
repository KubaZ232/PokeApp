import { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import "./App.css";
import FlamesComponent from "./components/FlamesComponent";
import MainPage from "./Pages/MainPage";


// dOdałem motion div i najpierw powinno się wyświetlić main page a później tamten komponent
function App() {
const [intro, setIntro] = useState(true);
  useEffect( () => {
    let introTimeout = setTimeout(
      () => {  setIntro(false) }
    , 9000)
    return () => {
      clearTimeout(introTimeout);
      console.log("cleared timer");
    }
  },[]);

  return (
    <>
      
      {/* {intro? <FlamesComponent/> : <MainPage /> } */}
      <MainPage />
    </>
  );
}

export default App;
