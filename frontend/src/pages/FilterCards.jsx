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
    <div className='w-full bg-white dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-600'>
      <h1 className='font-bold text-lg text-gray-900 dark:text-gray-100'>Filter Jobs</h1>
      <hr className='mt-3 border-gray-300 dark:border-gray-700' />
      <RadioGroup value={selectedvalue} onValueChange={ChangeHandler}>
        {
          filterdata.map((data, index) => (
            <div key={index}>
              <h1 className='font-bold text-lg text-gray-900 dark:text-gray-100'>{data.filtertype}</h1>
              {
                data.array.map((item, idx) => {
                  const itemid = `r${index}-${idx}`; // Unique ID
                  return (
                    <div className='flex items-center space-x-2 my-2' key={itemid}>
                      <RadioGroupItem value={item} id={itemid} />
                      <Label htmlFor={itemid} className='text-gray-900 dark:text-gray-100'>{item}</Label>
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
