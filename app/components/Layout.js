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
    <button className="bg-red-500" onClick={handleColorChange} value="red">Red</button>
      <button className="bg-green-500" onClick={handleColorChange} value="green">Green</button>
      <button className="bg-blue-500" onClick={handleColorChange} value="blue">Blue</button>
      <button className="bg-yellow-500" onClick={handleColorChange} value="yellow">Yellow</button>
      {children}
    </main>
    <Footer />
    </div>
    </div>
    </AccentColorContext.Provider>
  )
}