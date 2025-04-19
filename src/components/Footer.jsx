import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-6 text-center">
            <p className="text-lg font-light tracking-wider">
                &copy; 2025 <span className="text-blue-500 font-bold">PassXpert</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 animate-pulse">
                Designed with ❤️ by IndraSuthar.
            </p>
            <div className="mt-4">
                <ul className="flex justify-center gap-4">
                    <li>
                        <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-300">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;