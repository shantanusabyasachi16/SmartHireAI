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
import { APPLICATION_API_END_POINT } from "@/utils/endpoint";
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
const Shortlist = ["Accepted", "Rejected"];
const ApplicationTable = () => {
  const { allApplicants } = useSelector((store) => store.application);

  const Statushandler = async (status, id)=>{
    try {
      axios.defaults.withCredentials= true;
      const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status});
    if (res.data.success) {
      toast.success(res.data.message);
      
    }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div>
      <Table>
        <TableCaption>A list of applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allApplicants &&
            allApplicants?.applications?.map((item) => (
              <tr key={item._id}>
                <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phonenumber}</TableCell>
                <TableCell className="text-blue-600 cursor-pointer"> <a href={item?.applicant?. profile?.resume}target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a></TableCell>
                <TableCell>{item?.applicant?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="float-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent>
                      {Shortlist.map((status, index) => {
                        return (
                          <div
                          onClick={()=>Statushandler(status,item?.id)}
                            key={index}
                            className=" flex w-fit items-center cursor-pointer"
                          >
                            <span>{status}</span>
                          </div>
                        );
                      })}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicationTable;
