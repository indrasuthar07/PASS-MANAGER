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

export default Navbar;