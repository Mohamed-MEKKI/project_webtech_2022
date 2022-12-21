
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Layout({
  children
}){
  return (
    <div className={`bg-${color}-500 dark: bg-black`} >
      <button className="bg-red-500" onClick={handleColorChange} value="red">Red</button>
      <button className="bg-green-500" onClick={handleColorChange} value="green">Green</button>
      <button className="bg-blue-500" onClick={handleColorChange} value="blue">Blue</button>
      <button className="bg-yellow-500" onClick={handleColorChange} value="yellow">Yellow</button>
    <Header />
    <main className=" py-10 min-h-screen  max-w-full md:max-w-2xl md:mx-auto dark:text-white ">
      {children}
      </main>
      <Footer />
    </div>
  )
}
