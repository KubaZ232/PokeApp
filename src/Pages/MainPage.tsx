import React,{useEffect, useState} from 'react'
import { motion, useAnimationControls } from "framer-motion"

const variants = {
  closed: { opacity: 0, y: "-3%" },
  open: { opacity: 1, y:0 } 
}

const MainPage = () => {
  // const [ isOpen, setIsOpen ] = useState(false);
  // Control for specifying when animation should start
  const controls = useAnimationControls();

  // useEffect(() => {
  //   let mainPagePhotoTimer = setTimeout(
  //     () => {
  //       setIsOpen(true)
  //       console.log("start timer");
  //     }
  //   , 4500)
  //   return () => {
  //     clearTimeout(mainPagePhotoTimer);
  //     console.log("cleared timer");
  //   }
  // },[]);
  

  return (
    <div 
      className="w-full h-screen bg-center bg-cover bg-pokeBlack"
      
    >
      <motion.div 
        className="flex justify-center items-center"
        // animate={isOpen ? "open" : "closed"}
        // variants={variants}
      >
  
        <div className=" m-auto ">
          
            <img
              src="../public/poke1.jpg"
              className="flex-auto object-center max-h-[42rem]"
            />
            
              {/* <input className='absolute p-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/> */}
              {/* <p className="text-white text-center cursor-pointer" onClick={() => setIsOpen(isOpen => !isOpen)}>&#169; Jakub Zaręba </p> */}
        </div>
        
      
      </motion.div>
      
    </div>
  )
}

export default MainPage