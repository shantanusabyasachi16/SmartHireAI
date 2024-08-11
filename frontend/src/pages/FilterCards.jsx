import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { setsearchquery } from '@/redux/jobSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const filterdata = [
  {
    filtertype: "Location",
    array: ["Banglore", "Hyderabad", "Pune", "Mumbai", "Odisha", "Kolkata"]
  },
  {
    filtertype: "Role",
    array: ["Frontend Development", "Backend Development", "DevOps", "FullStack Development", "Data Science"]
  },
  {
    filtertype: "Salary",
    array: ["0-40k", "50k-1lakh", "1lakh-5lakh"]
  },
];

const FilterCards = () => {
  const [selectedvalue, setselectedvalue] = useState('');
  const dispatch = useDispatch();

  const ChangeHandler = (value) => {
    setselectedvalue(value);
  };

  useEffect(() => {
    dispatch(setsearchquery(selectedvalue));
    console.log('Selected value:', selectedvalue); // Debugging
  }, [selectedvalue, dispatch]);

  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>FilterJobs</h1>
      <hr className='mt-3' />
      <RadioGroup value={selectedvalue} onValueChange={ChangeHandler}>
        {
          filterdata.map((data, index) => (
            <div key={index}>
              <h1 className='font-bold text-lg'>{data.filtertype}</h1>
              {
                data.array.map((item, idx) => {
                  const itemid = `r${index}-${idx}`; // Unique ID
                  return (
                    <div className='flex items-center space-x-2 my-2' key={idx}>
                      <RadioGroupItem value={item} id={itemid} />
                      <Label htmlFor={itemid}>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCards;
