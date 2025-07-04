import { useState } from 'react'
import { HeroBackground } from './components/ui/HeroBackground'
import { Card } from './components/Card/Card'
import { SparklesCore } from "./components/ui/HeroSparkle";
function App() {

  return (
<>
      <HeroBackground>
        <div className="h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h2 className="md:text-9xl text-9xl lg:text-9xl font-bold text-center text-white relative z-20">
        CLONE-I 
      </h2>
      <div className="w-[40rem] h-40 relative flex justify-center ">
        <h1 className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2'>Network</h1>
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      </HeroBackground>
      <Card />
</>
  )
}

export default App
