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

import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobTable = () => {
  const { allAdminjobs, searchJobByText } = useSelector((store) => store.job);
  const [filterjobs, setfilterjobs] = useState(allAdminjobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredjobs = allAdminjobs.filter((job) => {
      if (!searchJobByText) {
        return true;
      }
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });
    setfilterjobs(filteredjobs);
  }, [allAdminjobs, searchJobByText]); // Filter when either `allAdminjobs` or `searchJobByText` changes

  return (
    <div>
      <Table>
        <TableCaption>List Of your posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterjobs?.map((job) => (
            <TableRow key={job._id}>
              <TableCell>{job?.company?.name}</TableCell>
              <TableCell>{job?.title}</TableCell>
              <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div
                      onClick={() => navigate(`/admin/companies/${job._id}`)}
                      className="flex items-center gap-2 w-fit cursor-pointer" > 
                    </div>
                    <div className=" flex items-center w-fit gap-2 cursor-pointer mt-2" >
                      <Eye/>
                      <span onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className="w-4">Applicant</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobTable;
