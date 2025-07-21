import React from 'react'

type TInput = {
    type?: string;
    placeholder?: string;
    className?: string
}

const Input = ({ type, placeholder, className }: TInput) => {
    return (
        <input className={`outline-none py-2 w-full focus:border-gray-500 focus:border-b-[1.8px] border-b-[1.5px] border-gray-400 ${className}`} type={type ? type : "text"} placeholder={placeholder} />
    )
}

export default Input
