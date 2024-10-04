 "use client"
 
import React from "react";

export default function Input ({ type, name, placeholder }) {
  const inputRef = React.useRef(null);
    return (
        <input
          className="pt-4 px-3 pb-3 border-solid border-[#cccccccc] border-[1px] rounded-md focus:outline-none focus:border-solid focus:border-[1px] focus:border-[#0056b3]"
          name={name}
          type={type}
          ref={inputRef}
          placeholder={placeholder}
        />
    );
}

