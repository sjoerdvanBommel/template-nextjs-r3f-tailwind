import { useTweakableProperties } from '@hooks/use-tweakable-properties/UseTweakableProperties';
import Link from 'next/link';
import React from 'react';

const IndexPage = () => {
  const tweakableProperties = useTweakableProperties({
    textSize: { value: '#ff0000' }
  }, 'Text');

  return (
    <main className='h-screen-responsive'>
      <div className='min-h-full flex flex-col justify-center align-middle text-center select-none'>
        <h1 style={{ color: tweakableProperties.textSize.value }} className={`text-[72px] font-extrabold above-canvas my-60`}>
          Starting template
        </h1>
        <h2 className='text-2xl max-w-md mx-auto'>
          A Next.js template including TypeScript, Tailwind CSS and react-three-fiber
        </h2>
        <p className='text-l max-w-md mx-auto above-canvas'>
          Use the classes "below-canvas" and "above-canvas" to bring the specified element behind or in the front of the react-three-fiber scene
        </p>
        <Link href="/about"><a className="bg-blue-400 px-4 py-2 above-canvas rounded w-fit-content self-center text-white">About</a></Link>
      </div>
    </main>
  )
}

export default IndexPage
