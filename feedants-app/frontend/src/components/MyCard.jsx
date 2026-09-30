import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Trophy } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const MyCard = () => {
  return (
    <div className='w-85'>
       <Link to='/id123' >
        <div className='flex flex-col  border-gray-300 border-2  py-4 px-2 gap-2 rounded-md '>
          
          <h2 className='font-extrabold text-2xl  px-2 text-neutral-700'>Feedants Classical Dance</h2>
          <div className='flex gap-2 items-center'>
            <Badge variant='secondary'>Dance</Badge>
            <Badge variant='secondary'>Multi-Win</Badge>
            <p className='flex items-center gap-1 text-xs text-green-800'><Trophy size={16}/> Winners get certificates</p>
        </div>
        <div className='flex items-center justify-between px-4 py-2'>
          <div className='flex gap-6'>
            <div className='flex flex-col items-center justify-center'>
            <p className='text-xs text-gray-500 font-medium'>Price Pool</p>
            <p className='text-lg text-green-900 font-semibold'>₹ 1,500</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-xs text-gray-500 font-medium'>Entry Fee</p>
            <p className='text-lg text-green-90 font-semibold'>₹ 99</p>
          </div>
          </div>
          <Button size='lg'>
            Register
            <ArrowUpRight className="h-8 w-8 text-green-500 stroke-[2.5]"/>
            </Button>
        </div>
        </div>
      </Link>
     </div>
  )
}

export default MyCard