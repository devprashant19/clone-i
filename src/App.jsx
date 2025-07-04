import { useState } from 'react'
import { HeroBackground } from './components/ui/HeroBackground'
import { Card } from './components/Card/Card'

function App() {

  return (
<>
      <HeroBackground>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-9xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        CLONE-I <br /> NETWORK
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
      </HeroBackground>
      <Card />
</>
  )
}

export default App
