import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white border-b border-cyan-800" : "text-gray-500"
    return (
        <button onClick={selectTab}>
            <p className={`mr-4 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton