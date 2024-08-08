import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const CompaniesTable = () => {

  const { companies, searchCompanyByText } = useSelector((store) => store.company);
  const [filterCompany,setfilterCompany]= useState(companies);
const navigate = useNavigate();

  useEffect(()=>{
 const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
if (!searchCompanyByText) {
  return true
};
return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())

 })
 setfilterCompany(filteredCompany)


  },[companies,searchCompanyByText])//when any thing in one of these will change the useffect will be called
  
  
  return (
    <div>
      <Table>
        <TableCaption>List Of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length <= 0 ? (
            <span>Companies Not Found</span>
          ) : (
            <>
              {filterCompany?.map((company) => (
                <tr>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={company.logo} />
                    </Avatar>
                  </TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div onClick={()=>navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                          <Edit2 />
                          <span className="w-4">Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </tr>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;