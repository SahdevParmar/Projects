import MyCard from "@/components/MyCard"
import api from '@/api/client';
import { useEffect, useState } from "react";

const Competition = () => {
  const [allCompetitions, setAllCompetitions] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const res=await api.get(`/api/competitions`)
        setAllCompetitions(res.data.competitions)
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  },[])
  
  if (loading) return <div className="p-6">Loading…</div>;
  if (!allCompetitions) return <div className="p-6 text-red-600">Competition not found</div>;
  console.log(allCompetitions)
  return (
    <div>
      <div>
      competition main Page
    </div>
    <div className='p-4 flex flex-wrap gap-4'>
     {
      allCompetitions.map((competition)=>{
        return <MyCard id={competition._id} key={competition._id} />
      })
     }
    </div>
    </div>
  )
}

export default Competition