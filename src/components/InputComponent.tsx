import React from "react";

const inputComponent = () => {
  return (
    <form className="w-full max-w-sm">
      <div className="absolute p-1 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <input />
        <button className="text-white pl-3 pr-3 bg-poke-green " >GO</button>
      </div>
    
    </form>
  );
};

export default inputComponent;
