import { SignOut } from '@/components/sign-out'
import React from 'react'

const ProtectedPage = () => {
  return (
    <main>
      <div>Protected Page</div>
      <SignOut />
    </main>
  )
}

export default ProtectedPage