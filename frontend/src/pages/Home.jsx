
import Navbar from '@/components/shared/Navbar'
import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import Latestjobs from './Latestjobs'
import Footer from '@/components/shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store=>store.auth)
  const  navigate = useNavigate();
  useEffect(()=>{
if (user?.role =='recruiter') {
  navigate("/admin/companies")
}
  },[])
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <CategoryCarousel/>
    <Latestjobs/>
     <Footer/>
    </div>
  )
}

export default Home