import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { setsearchquery } from '@/redux/jobSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Development",
  "Cyber Security",
  "DevOps"
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchhandler = (query) => {
    dispatch(setsearchquery(query));
    navigate("/explore");
  };

  return (
    <div className="my-20 px-4">
      <Carousel className="w-full max-w-xl mx-auto relative">
        <CarouselContent className="flex gap-4">
          {
            category.map((cat, index) => (
              <CarouselItem key={index} className="flex items-center justify-center">
                <Button 
                  onClick={() => searchhandler(cat)} 
                  variant="outline" 
                  className="bg-gradient-to-r from-[#6a0dad] to-[#ff99cc] text-white font-semibold rounded-full px-6 py-3 border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:from-[#a05dff] dark:to-[#6a0dad] dark:text-gray-200"
                >
                  {cat}
                </Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-600 transition-all duration-300 dark:bg-gray-900 dark:hover:bg-gray-800">
          <ChevronLeft className="text-gray-300 dark:text-gray-400" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-600 transition-all duration-300 dark:bg-gray-900 dark:hover:bg-gray-800">
          <ChevronRight className="text-gray-300 dark:text-gray-400" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
