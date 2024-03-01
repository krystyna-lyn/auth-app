import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    const { userId } = auth()
    console.log(userId)

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
                <div className='text-white flex items-center'>
                    {!userId && (
                        <>
                            <Link href='/sign-in' className='text-gray-300 hover:text-white mr-4'>
                                Sign in
                            </Link>
                            <Link href='/sign-up' className='text-gray-300 hover:text-white mr-4'>
                                Sign up
                            </Link>
                        </>
                    )}
                    <div className='ml-auto'   >
                        <UserButton afterSingUpUrl ='/'/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header