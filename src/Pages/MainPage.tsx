import React,{useEffect, useState} from 'react'
import { motion, useAnimationControls } from "framer-motion"
import InputComponent from '../components/InputComponent'


const MainPage = () => {
 
  return (
    <div 
      className="w-full h-screen bg-center bg-cover bg-pokeBlack ShowAnimation"
      
    >
      <div 
        className="flex justify-center items-center"
      >
  
        <div className=" m-auto ">
          
            <img
              src="/mobileTitle.jpg"
              className="flex-auto object-center p-6 absolute left-1/2 transform -translate-x-1/2 inset-x-0 top-14  "
            />
            
              <InputComponent/>
            <img
              src="/MobilePokemonBottom.jpg"
              className="flex-auto object-center p-6 absolute inset-x-0 customMobile:bottom-12 laptop:bottom-5 md:bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2'"
            />
              <p className="text-white text-center cursor-pointer absolute inset-x-0 bottom-9" >&#169; Jakub Zaręba </p>
        </div>
        
      
      </div>
      
    </div>
  )
}

export default MainPage