import { useState } from "react";
import "./App.css";
import FlamesComponent from "./components/FlamesComponent";
import MainPage from "./Pages/MainPage";
import { motion, useAnimationControls } from "framer-motion"


// dOdałem motion div i najpierw powinno się wyświetlić main page a później tamten komponent
function App() {
  return (
    <motion.div>
      <MainPage />
      {/* <FlamesComponent/> */}
    </motion.div>
  );
}

export default App;
