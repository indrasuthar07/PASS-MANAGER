<<<<<<< HEAD
import React from 'react';

const Navbar = ({ children }) => {
    return (
        <nav className="backdrop-blur-md bg-white/60 border-b border-blue-200/40 shadow-xl fixed w-full top-0 left-0 z-30 transition-all">
            <div className="container mx-auto flex justify-between items-center py-2 px-2 md:px-4">
                <h1 className="text-3xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg select-none">
                    Pass<span className="text-blue-900">Xpert</span>
                </h1>
                <div className="flex items-center">
                  <ul className="flex gap-3 md:gap-5 text-base md:text-lg font-semibold">
                      <li className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
                          <a href="#">Home</a>
                      </li>
                      <li className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
                          <a href="#features">Features</a>
                      </li>
                      <li className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
                          <a href="#manager">Manager</a>
                      </li>
                      <li className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
                          <a href="/profile">Profile</a>
                      </li>
                      <li className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
                          <a href="#contact">Contact</a>
                      </li>
                  </ul>
                  {children}
                </div>
            </div>
        </nav>
    );
};

=======
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-extrabold text-blue-500 tracking-wide">
                    Pass<span className="text-white">Xpert</span>
                </h1>
                <ul className="flex gap-6 text-lg">
                    <li className="hover:text-blue-400 transition duration-300">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:text-blue-400 transition duration-300">
                        <a href="#">About</a>
                    </li>
                    <li className="hover:text-blue-400 transition duration-300">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

>>>>>>> 8c76e7c1c7b906539a5f91a7c2e4ebe358ec577c
export default Navbar;