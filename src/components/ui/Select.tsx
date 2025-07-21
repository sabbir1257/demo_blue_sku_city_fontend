import React from 'react'

type TSelect ={
    className?: string;
    children: React.ReactNode;
}

const Select = ({className,children}: TSelect) => {
  return (
    <select className={`outline-none py-2 w-full focus:border-gray-500 focus:border-b-[1.8px] border-b-[1.5px] border-gray-400 ${className}`} >
      {children}
    </select>
  )
}

export default Select
