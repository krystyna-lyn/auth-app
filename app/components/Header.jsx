import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className="nav bg-gray-700 py-4 px-6 flex items-center justify-between mb-6">
        <div className="flex items-center">
            <Link href='/'>
            <div className="text-lgg uppercase font-bold text-white">
                Auth Clerk app 
            </div> 
            </Link>
        </div>
        <div className='text-white'>
        <Link href='/sign-in' className='text-gray-300 hover:text-white mr-4'>
            Sign in
        </Link>
        <Link href='/sign-un' className='text-gray-300 hover:text-white mr-4'>
            Sign up
        </Link>
        </div>
    </div>
    </>
  )
}

export default Header