'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LoginPage = () => {

  const { isLoaded, isSignedIn, user } = useUser()

  const router = useRouter()

  useEffect(() => {

    const role = user?.publicMetadata?.role
    if (role) {
      router.push(`/${role}`)
    }

  }, [user, router])

  return (
    <div className='h-screen flex items-center justify-center bg-lamaSky'>
      <SignIn.Root>
        <SignIn.Step name='start' className='bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2 '>
          <h1 className='text-xl font-bold flex items-center gap-2'>
            <Image src="/logo.png" alt="" width={32} height={32} />
            Shree Janakalyan Boarding School</h1>
          <h2 className='text-gray-900 text-xl'>Login to your account</h2>

          <Clerk.GlobalError className='text-red-500 text-sm ' />
          <Clerk.Field className='flex flex-col gap-2' name='identifier'>
            <Clerk.Label className='text-lg text-gray-700'>Username</Clerk.Label>
            <Clerk.Input type='text' required className='p-2 rounded-md ring-1 ring-gray-300' />
            <Clerk.FieldError className='text-red-500 text-sm' />
          </Clerk.Field>

          <Clerk.Field className='flex flex-col gap-2' name='password'>
            <Clerk.Label className='text-lg text-gray-700'>Password</Clerk.Label>
            <Clerk.Input className='p-2 rounded-md ring-1 ring-gray-300' type='password' required />
            <Clerk.FieldError className='text-red-500 text-sm' />
          </Clerk.Field>

          <SignIn.Action className='bg-cyan-500 text-white py-2 my-2 px-4 rounded-md' submit>Login</SignIn.Action>

        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}

export default LoginPage