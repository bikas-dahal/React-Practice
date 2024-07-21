import Link  from 'next/link';



export default function Home() {
  return (
    <main>
      <h1 className='text-blue-500 font-semibold'>
        Time to get started!
      </h1>
      <p><Link href='/meals'>Meals</Link> </p>
    </main>
  );
}
