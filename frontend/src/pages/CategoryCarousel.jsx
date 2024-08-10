import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { setsearchquery } from '@/redux/jobSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const category= [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
   "FullStack Development",
   "Cyber Security",
   "DevOps"
]
const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const searchhandler = (query) => {
    dispatch(setsearchquery(query));
    Navigate("/explore");
  };

  return (
    <div>
      <Carousel  className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {
            category.map((cat,index ) =>(
              <CarouselItem className="md:basis-1/2 lg-basis-1/3">
           <Button onClick={()=>searchhandler(cat)} variant="outline" className="rounded-full font-bold text-[#6f597a]">{cat}</Button>
              </CarouselItem>

              )  )

        
          }
        
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CategoryCarousel