import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link href={'/login'}>Login -&gt;</Link>
    </div>
  )
}

export default Home