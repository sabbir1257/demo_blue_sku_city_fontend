import React, { ReactNode } from 'react'

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <div className={`${className ? className : " "} max-w-[1200px] mx-auto px-4 py-2`}>
            {children}
        </div>
    )
}

export default Container
