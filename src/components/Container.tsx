import React from 'react'

function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`container mx-auto py-8 px-2 md:py-16 md:px-4 ${className || ""}`}>
        {children}
    </div>
  )
}

export default Container