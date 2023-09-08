import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='bg-black h-screen w-screen flex items-center justify-center'>
      <div className='w-[50px] h-[50px] bg-white items-center flex justify-center rounded-lg'>
        <Loader2 className='animate-spin text-black' />
      </div>
    </div>
  )
}

export default Loading
