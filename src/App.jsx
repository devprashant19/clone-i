import { useState } from 'react'
import { HeroBackground } from './components/ui/HeroBackground'
import { Card } from './components/Card/Card'
import { NavbarItems } from './components/Navbar/NavbarItems';
import { InfoText } from './components/ui/InfoText';
import { ButtonGrad } from './components/ui/ButtonGrad';
import { GlobeComp } from './components/Globe/GlobeComp'
function App() {

  return (
    <div className='flex flex-col align-middle justify-center'>
      <HeroBackground>
        <NavbarItems />
        <div className="relative h-[95vh] w-screen bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h2 className="md:text-9xl text-9xl lg:text-9xl font-bold roboto-slab-text text-center text-white absolute top-2/10 z-20">
            CLONE-I
          </h2>
          <div className="w-[40rem] h-40 relative flex justify-center ">
            <h1 className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2'>Network</h1>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-1 absolute top-9/10  left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ButtonGrad className="cursor-pointer w-40 h-10 rounded-[22px] roboto-slab-text max-w-sm flex items-center justify-center bg-white dark:bg-zinc-900">
                Join now
              </ButtonGrad>
            </div>
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />

            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>
      <h1 className='mx-8 roboto-slab-text'>Features</h1>
      <Card />
      <h1 className='mx-9 roboto-slab-text'>What We Do</h1>
      <InfoText words="Connect with innovators worldwide through our revolutionary AI-powered network. Experience seamless collaboration, instant communication, and groundbreaking discoveries that shape the future of technology." />
      <InfoText words="Harness the power of artificial intelligence to clone, adapt, and innovate. Our platform connects brilliant minds across continents, enabling real-time collaboration and breakthrough solutions." />
      <GlobeComp />
      </HeroBackground>
      </div>
  )
}

export default App
