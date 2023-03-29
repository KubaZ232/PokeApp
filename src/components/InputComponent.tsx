import React, {useState, ChangeEvent} from "react";

const inputComponent = () => {
  const [name, setName] = useState("");
  const handleTextChange = (event: ChangeEvent<HTMLInputElement> ) => {
    setName(event.target.value)
  }
  return (
    <form className="w-full max-w-sm">
      <div className="absolute p-1 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      ">
        <label className="text-white ">Your Name:</label>

        <input type="text" name="playerName" className="border-gray-300 mx-2 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-poke-green focus:ring focus:ring-poke-green hover:bg-poke-yellow"
        value={name}    
        onChange={handleTextChange}
        />
        
        <button className="text-white p-2 pl-3 pr-3 bg-poke-red rounded-lg customMobile:ml-2 hover:bg-poke-red-strong" >Clear</button>
        <button className="text-white ml-2 p-2 pl-7 pr-7  customMobile:pl-11 customMobile:pr-11  bg-poke-emerald rounded-lg hover:bg-poke-emerald-strong" >Start</button>
        
      </div>
    
    </form>
  );
};

export default inputComponent;
