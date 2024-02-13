import React from 'react'

const TabContent = ({ tabData, id }) => {
    // Find the item with the matching ID
    const tabItem = tabData.find(item => item.id === id);
    return (
        <div>
            <li>
                {tabItem.content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </li>
        </div>
    );
};

export default TabContent