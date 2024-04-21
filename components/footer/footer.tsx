import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export const FooterComponent = () => {
  return (
    <section className='flex fixed bottom-0 justify-center w-full bg-slate-50'>
        <div className='inline-flex md:gap-3 items-center'>
            <p>Coder:</p>
            <Button asChild variant={"link"}>
                <Link target='_blank' href="https://github.com/ajmalshahabudeen">Ajmal Shahabudeen</Link>
            </Button>
            <Button asChild variant={"link"}>
                <Link className='gap-2' target='_blank' href="https://github.com/ajmalshahabudeen/auth_v5_ref">Source<FaArrowUpRightFromSquare /></Link>
            </Button>
        </div>
    </section>
  )
}
