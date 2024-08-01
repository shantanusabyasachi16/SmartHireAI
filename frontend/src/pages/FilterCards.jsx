import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'
const filterdata =[
  {
    filtertype:"Loaction",
    array:["Banglore"," Hyderabad","Pune","mumbai","Odisha"]
  },
  {
    filtertype:"Industry",
    array:["Frontend Development","Backend Development","DevOps","FullStack Development","Odisha"]
  },
  {
    filtertype:"Salary",
    array:["0-40k","50-1lakh","1lakh-5lakh",]
  },
  
]
const FilterCards = () => {
  return (
    <div className=' w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>FilterJobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterdata.map((data,index) =>(
            <div>
              <h1 className='font-bold text-lg'>{data.filtertype}</h1>
              {
                data.array.map((item,index)=>{
                  return(
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          )
        ) }
      </RadioGroup>
    </div>
  )
}

export default FilterCards