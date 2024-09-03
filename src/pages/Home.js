import background from './images/background.png';
import background1 from './images/background1.png';
import { useState } from "react";

import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div id="home" className="relative">
        <img src={background1} alt="Luxury Cars"
             className="w-full bg-blend-color blur-sm opacity-100 h-auto object-cover"/>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center">
            <div className="absolute top-4 left-4">
                <FaBars
                    style={{color: 'white'}}
                    className="text-white text-4xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                {menuOpen && (
                    <div className="absolute mt-2 bg-white  rounded shadow-lg py-2">
                        <a href="#section1" style={{color: 'white'}} className="block px-4 py-2">Section 1</a>
                        <a href="#section2" style={{color: 'white'}} className="block px-4 py-2">Section 2</a>
                        <a href="#section3" style={{color: 'white'}} className="block px-4 py-2">Section 3</a>
                    </div>
                )}
            </div>
            <h1 style={{color: 'white'}} className="text-7xl font-cormorant mb-4">Masáže Jungová</h1>
            <p style={{color: 'white'}} className="text-white font-cormorant text-2xl mb-6">Tady bude nejakej text, co
                si sama zvolis</p>
            <Link to="cars"
                  className="bg-button font-cormorant font-bold hover:bg-orange-600 text-white font-light py-3 px-6 rounded-b-lg cursor-pointer transition-colors duration-300"
                  spy={true} smooth={true} offset={-70} duration={500}>
                Zaplujte hloubeji
            </Link>
        </div>
    </div>
}

export default Home;