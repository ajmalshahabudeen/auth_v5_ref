import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export const FooterComponent = () => {
  return (
    <footer className='flex fixed bottom-0 justify-center w-full'>
        <div className='inline-flex gap-3 items-center'>
            <p>Developed By:</p>
            <Button asChild variant={"link"}>
                <Link target='_blank' href="https://github.com/ajmalshahabudeen">Ajmal Shahabudeen</Link>
            </Button>
        </div>
    </footer>
  )
}
