import React from 'react'

const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7">
                <section>
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">GustInGame</h1>
                    <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dapibus ante</p>
                </section>
            </div>
        </div>
    )
}

export default HeroSection