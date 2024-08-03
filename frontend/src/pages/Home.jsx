
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import Latestjobs from './Latestjobs'
import Footer from '@/components/shared/Footer'
import useGetAllJobs from '@/components/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
  
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