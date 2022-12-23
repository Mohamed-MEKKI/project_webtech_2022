import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import React, { useState,createContext} from 'react';


export const AccentColorContext = createContext('blue');

export default function Layout({
  children
}){
  const [color, setColor] = useState('white');
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  return (
    <AccentColorContext.Provider value={color}>
    <div className={`bg-${color}-500`} >
      <div className='dark:bg-black'>
    
    <Header />
    <main className=" py-10 min-h-screen  max-w-full md:max-w-2xl md:mx-auto dark:text-white ">
    <button  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleColorChange} value="green">Green</button>
    <button  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleColorChange} value="red">Red</button>
    <button  className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900" onClick={handleColorChange} value="yellow">Yellow</button>
    <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" onClick={handleColorChange} value="blue">Blue</button>
      {children}
    </main>
    <Footer />
    </div>
    </div>
    </AccentColorContext.Provider>
  )
}

