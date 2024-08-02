import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
           <TableCaption>List Of your applied jobs</TableCaption> 
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
                [1,2,].map((item,index)=>(
                   <TableRow key={index}>
<TableCell>12-5-2024</TableCell>
<TableCell>Frontend Developer</TableCell>
<TableCell>Google</TableCell>
<TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                   </TableRow>
                ))
            }
           </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable