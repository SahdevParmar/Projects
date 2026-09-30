import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ArrowUpRight, CalendarRange, CheckCircle2Icon, Info, Send, Timer, Trophy, Upload, Users } from 'lucide-react'
import { Play } from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom' 
import CountdownBanner from '@/components/CountdownBanner';
import CompetitionDetails from '@/components/CompetitionDetails';
import RewardDetails from '@/components/RewardsDetails';
import api from '@/api/client';
import PrevWInnerCard from '@/components/prevWInnerCard';
import IsoDateconverter from '@/components/IsoDateconverter';

const CompetitionById = () => {
    
    const {id}=useParams();
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      const fetchData=async()=>{
        try {
          const res=await api.get(`/api/competitions/${id}`)
          setData(res.data)
        } catch (error) {
          console.log(error);
        }finally{
          setLoading(false)
        }
      }
      fetchData()
    },[id])
     if (loading) return <div className="p-6">Loading…</div>;
  if (!data) return <div className="p-6 text-red-600">Competition not found</div>;

  
  const { competition, userState, slotsLeft, state } = data;

    const prevWinners = data.competition.previousWinners || [];
    const loop=[...prevWinners,...prevWinners]
    console.log(competition.dates.registrationCloses)
  return (
    <div className='flex flex-wrap gap-4 md:p-6 p-2 md:px-26 bg-white '>
      <div className='flex flex-col gap-2 '>
    <div className='grow '>
        <div className='flex flex-col bg-white border-gray-300 border-2 h-full  py-4 px-2 gap-2 rounded-xl '>
          
          <div className='flex justify-between'>
            <h2 className='font-extrabold text-2xl  px-2 text-neutral-700'>Feedants Classical Dance</h2>
          <Button size='sm' variant='secondary'><CheckCircle2Icon/>
            Registered
            
            </Button>
          </div>
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
          <div className='w-[40%] flex flex-col gap-1 font-medium'>
            <p className='text-xs text-green-700 flex gap-1'>
                <Users size={'15'}/>Only 18 spots left</p>
            <Progress value={20} />
            <p className='text-xs'>2/20 Booked</p>
          </div>
        </div>
        </div>
     </div>
     <div className='grow items-center flex'>
        <div className='flex grow justify-between bg-white border-gray-300 border-2  py-4 px-4 gap-2 rounded-xl h-full '>
          <div className='flex gap-2 items-center'>
            <Avatar className="h-22 w-22 md:h-38 hover:w-28 active:w-28 ease-in-out transition-all duration-200 ">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
            <div className='transition-all'>
                <p className='text-neutral-600 text-xs'>Judge</p>
                <p className='font-semibold'>Manju Dubey</p>
                <p className='text-neutral-600 text-xs'>Professor</p>
                <p className='text-neutral-600 text-xs'>12+ years of exp</p>
            </div>
          </div>
          <div className='items-center justify-center flex grow  transition-all'>
            <button className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center transition-all group-hover:bg-neutral-100">
                <Play className="w-4 h-4 text-neutral-700 fill-neutral-700 ml-0.5" />
            </div>
            <span className="text-xs font-medium text-neutral-500 transition-all">Intro Video</span>
            </button>
          </div>
          
          
        </div>
        </div>
      <div className=' '>
        <div className='flex  justify-between bg-white border-gray-300 border-2  py-4 px-4 gap-2 rounded-xl h-full '>
          <div className='flex gap-2 items-center'>
            
            
           
          </div>
          <div className='items-center justify-center font-semibold grow  transition-all'>
            <p className='font-semibold px-2 mb-1'>Important Dates</p>
            <div className='font-medium rounded-lg border-gray-300 border'>
              <div className='flex justify-center  items-center border-b border-gray-300'>
                <div className='border-r border-gray-300 justify-center py-4 px-8 flex gap-4'>
                  <CalendarRange />
                  <div>
                    <p className='text-gray-500 text-sm'>Register Before</p>
                  <p className='text-green-700 font-semibold'>
                    
                    </p>
                  <p>11:50 PM</p>
                  </div>
                </div>
                <div className='justify-center py-4 px-8 flex gap-4'>
                  <Send />
                  <div>
                    <p className='text-gray-500 text-sm'>Register Before</p>
                  <p className='text-green-700 font-semibold'>10 Aug 26</p>
                  <p>11:50 PM</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='border-r border-gray-300 justify-center py-4 px-8 flex gap-4'>
                  <Upload />
                  <div>
                    <p className='text-gray-500 text-sm'>Register Before</p>
                  <p className='text-green-700 font-semibold'>10 Aug 26</p>
                  <p>11:50 PM</p>
                  </div>
                </div>
                <div className='justify-center py-4 px-8 flex gap-4'>
                  <Trophy />
                  <div>
                    <p className='text-gray-500 text-sm'>Register Before</p>
                  <p className='text-green-700 font-semibold'>10 Aug 26</p>
                  <p>11:50 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
        
        </div>
    
    </div>
    <div className='grow w-[18vw] flex-col flex gap-2'>
      <div className='bg-green-100 text-green-900 flex lg:h-20  rounded-lg p-4 justify-center gap-2 font-semibold border-2 border-green-500'>
        
        <CountdownBanner closesAt={competition.dates.registrationCloses}/>
    </div>
    <div className=''>
        <div className='flex-col  justify-between    border-gray-300 border-2 overflow-hidden  py-4 px-4 gap-2 rounded-xl  font-medium'>
          <p className='font-semibold px-2 mb-1'>Previous Winners</p>
          <div className='[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]'>
            <div className='flex gap-3 w-max  animate-marquee hover:paused '>
            
            {
              loop.map((winner ,idx)=>{
                
                
                return (
                <PrevWInnerCard key={idx} winner={winner}/>
              )})
            }

          </div>
          </div>
        </div>
        </div>
        <CompetitionDetails competition={competition} userState={userState}/>
    </div>
      <RewardDetails competition={competition} userState={userState}/>
    </div>
  )
}

export default CompetitionById