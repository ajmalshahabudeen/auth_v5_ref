import GetSession from '@/components/getSession'
import { SignOut } from '@/components/sign-out'
import Image from 'next/image'
import React from 'react'

const ProtectedPage = async() => {
  const session = await GetSession()
  console.log("the session is",session)
  const imageLink = session?.user?.image as string
  return (
    <main className='flex flex-col justify-center items-center min-h-screen gap-5'>
      <div>Protected Page</div>
      <div className='border border-slate-950 w-60'></div>
      <Image className='rounded-full' src={imageLink ? imageLink : "https://i.pravatar.cc/300"} alt="Avatar" width={180} height={37} priority />
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <SignOut />
    </main>
  )
}

export default ProtectedPage