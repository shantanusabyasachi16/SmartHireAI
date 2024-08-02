import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const UpdateProfile = ({open,setopen}) => {
  return (
    <div>
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[425px" onInteractOutside={() => setopen(false)}>
              <DialogHeader>
                <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>  
                <form>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input
                        id="name"
                        name="name"
                        className="col-span-3"
                        />
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor="email" className="text-right">Email</Label>
                        <Input
                        id="email"
                        name="email"
                        className="col-span-3"
                        />
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor="number" className="text-right">Number</Label>
                        <Input
                        id="number"
                        name="number"
                        className="col-span-3"
                        />
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor="bio" className="text-right">Bio</Label>
                        <Input
                        id="bio"
                        name="bio"
                        className="col-span-3"
                        />
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor="skills" className="text-right">Skills</Label>
                        <Input
                        id="skills"
                        name="skills"
                        className="col-span-3"
                        />
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor="file" className="text-right">Resume</Label>
                        <Input
                        id="file"
                        name="file"
                        type="file"
                        accept="application/pdf"
                        className="col-span-3"
                        />
                        </div>
                      
                    </div>
                    <DialogFooter></DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default UpdateProfile