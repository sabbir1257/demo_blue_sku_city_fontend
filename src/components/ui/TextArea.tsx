import React from 'react'
type TTextArea = {
    className?: string;
    placeholder?: string;
}
const TextArea = ({className,placeholder}:TTextArea) => {
  return (
    <textarea rows={4} className={`outline-none py-2 w-full focus:border-gray-500 focus:border-b-[1.8px] border-b-[1.5px] border-gray-400 ${className}`} placeholder={placeholder? placeholder: "Message"} >
      
    </textarea>
  )
}

export default TextArea;