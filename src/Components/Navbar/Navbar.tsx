import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"

function Navbar() {
  return (
    <header className="flex justify-between items-center drop-shadow-md text-white py-6 px-8 md:px-32 bg-white h-38 shadow-2xl">
    <a href="/machine">
      <img
        src={logo}
        alt="logo azul redondo"
        className="w-32 h-30 hover:scale-105 transition-all"
      />
    </a>

  <h1 className='text-slate-500 text-3xl font-bold text-center'>SOUND-MACHINE</h1>
    
  </header>
  )
}

export default Navbar