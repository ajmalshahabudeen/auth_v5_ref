import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-5 p-10'>
      <div>Home</div>
      <Link href={'/login'}>Login -&gt;</Link>
      <Link href={'/register'}>Register -&gt;</Link>
    </div>
  )
}

export default Home