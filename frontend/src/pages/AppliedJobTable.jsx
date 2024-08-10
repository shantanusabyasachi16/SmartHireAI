import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
  const {allApliedjobs} = useSelector(store=>store.job)
  return (
    <div>
        <Table>
           <TableCaption className="text-xl text-gray-600">List Of your applied jobs</TableCaption> 
           <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>   
            </TableRow>
           </TableHeader>
           <TableBody>
            {
                allApliedjobs.length>=0 && allApliedjobs.map((appliedjob)=>(
                   <TableRow key={appliedjob?._id}>
<TableCell>{appliedjob?.createdAt.split("T")[0]}</TableCell>
<TableCell>{appliedjob.job?.title}</TableCell>
<TableCell>{appliedjob.job?.company?.name}</TableCell>
<TableCell className="text-right"><Badge className={`${appliedjob?.status =="rejected"? 'text-red-500' : appliedjob.status =='pending'? 'text-gray-400':'bg-green-500'}`}>{appliedjob.status.toUpperCase()}</Badge></TableCell>
                   </TableRow>
                ))
            }
           </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable