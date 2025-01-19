import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'


function App() {

  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <Hero/>
      <Navbar/>
      <Dishes/>
    </main>
  )
}

export default App
