import React, { ReactNode } from 'react'

const Button = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <button className={`${className ? className : ""} font-medium hover:bg-blue-900 hover:text-white transition-all duration-200 px-4 py-2`}>
            {children}
        </button>
    )
}

export default Button
