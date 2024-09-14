import React, { useState } from 'react'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('Vse')

  const categories = ['Vse', 'Masaze', 'Relaxacni masaze', 'Ezoterika']
  const services = [
    { name: 'wip', price: '$wip', description: 'wip', category: 'wip' },
    { name: 'wip', price: '$wip', description: 'wip', category: 'wip' },
    { name: 'wip', price: '$wip', description: 'wip', category: 'wip' },
    { name: 'wip', price: '$wip', description: 'wip', category: 'wip' },
    { name: 'wip', price: '$wip', description: 'wip', category: 'wip' },
  ]

  const filteredServices = activeCategory === 'Vse' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  return (
    <div id='services' className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-cormorant text-center text-gray-800 mb-12">Nabizene sluzby</h2>
        <div className="mb-10 flex justify-center space-x-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-lg bg-button font-cormorant transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}>
              <h3 className="text-2xl font-cormorant mb-3 text-indigo-700">{service.name}</h3>
              <p className="text-xl font-cormorant mb-3 text-gray-700">{service.price}</p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services