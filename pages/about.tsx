import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='min-h-full flex flex-col justify-center align-middle text-center select-none'>
      <Link href="/">
        <a className="bg-blue-400 px-4 py-2 above-canvas rounded w-fit-content self-center">Go home</a>
      </Link>
    </div>
  );
}

export default AboutPage
