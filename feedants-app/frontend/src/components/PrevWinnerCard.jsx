import React from 'react'

const PrevWInnerCard = ({winner}) => {
    
  return (
    <div  className='flex shrink-0 bg-gray-100 rounded-lg p-1 justify-center items-center gap-2'>
              <div className='h-20 w-20 rounded-lg overflow-hidden'>
                <img className='h-20 w-20 rounded-lg object-cover'
                    src={winner.imageUrl} alt="" />
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
              
              </div>
              <div className='flex flex-col shrink-0 p-2 gap-1 font-semibold text-sm'>
                <p>{winner.name}</p>
                <p className='text-green-800'>
                    {winner.rank===1?'1st ':winner.rank===2?'2nd ':winner.rank===3?'3rd ':'4th '}
                    Rank</p>
              </div>
            </div>
  )
}

export default PrevWInnerCard