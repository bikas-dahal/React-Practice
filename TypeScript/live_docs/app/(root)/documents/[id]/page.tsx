import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <div>
        <Header>
            <div className='flex justify-center w-fit items-center gap-2'>
                <p className='document-title'>
                    Title hereN
                </p>
            </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </Header>
      <Editor />
    </div>
  )
}

export default Document
