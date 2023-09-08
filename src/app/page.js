'use client' //This is used to define next js that this is not a server component as by default every component is a server function
import Loading from '@/components/loading_state'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
// Implementation of card from this awesome library https://ui.shadcn.com/
const page = () => {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }, [])

  return loading ? (
    Loading()
  ) : (
    <div className='items-center flex justify-center h-screen w-screen'>
      <Card className='outline outline-gray-500 bg-black w-[300px]'>
        <CardHeader>
          <CardTitle className='text-white'>Login</CardTitle>
          <CardDescription>Authenticate to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder='Email' className='mb-5' type='email' />
          <Input placeholder='Password' type='password' />
        </CardContent>
        <CardFooter>
          <div className='flex'>
            <Button className='mr-2 bg-white text-black hover:text-white'>
              Login
            </Button>
            <Button className='hover:text-black hover:bg-white'>Signup</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default page
