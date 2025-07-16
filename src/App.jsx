import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import Features from './components/Features'
import Tips from './components/Tips'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() { 
  const [passwordCount] = useState(7)

  return (
    <BrowserRouter>
      <AnimatedBackground />
      <Navbar>
        {/* ThemeSwitcher or other children */}
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <div id="manager" className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
              <Manager/> 
            </div>
            <Tips />
          </>
        } />
        {/* Add other routes if needed */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App