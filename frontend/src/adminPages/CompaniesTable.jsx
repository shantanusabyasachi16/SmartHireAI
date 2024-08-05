import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2, MoreHorizontal } from "lucide-react";
import React from "react";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>List Of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right" >Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://i.pinimg.com/originals/09/2f/7b/092f7b121aaabf4449aee3555b0f26a2.png" />
            </Avatar>
          </TableCell>
       <TableCell>Company Name</TableCell>
       <TableCell>18-7-2024</TableCell>
       <TableCell className="text-right">
        <Popover>
            <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
            <PopoverContent className="w-32">
<div className="flex items-center gap-2 w-fit cursor-pointer"><Edit2/><span className="w-4">Edit</span></div>
            </PopoverContent>
        </Popover>
       </TableCell>
       
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
