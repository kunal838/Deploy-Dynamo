"use client"
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { redirect } from 'next/navigation'

import { HammerIcon, LogOut, LogOutIcon } from 'lucide-react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Page() {
  const {data} = useSession()
  let isMobile = window.matchMedia("(max-width: 600px)").matches;


  if(data){
    return (
      <div>
       
        <Navbar/>
        
        <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen max-w-screen w-screen border-t-[0.09px] opacity-40"
    >
      <ResizablePanel defaultSize={isMobile?0:25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={isMobile?0:25}>
                              <Card className="h-full ">
                              <CardHeader>
                                <CardTitle>Create project</CardTitle>
                                <CardDescription>Deploy your new project in one-click.</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <form className=''>
                                  <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                      <Label htmlFor="name">Project Name</Label>
                                      <Input id="name" placeholder="Name of your project" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                      <Label htmlFor="framework">Framework</Label>
                                      <Select>
                                        <SelectTrigger id="framework">
                                          <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                          <SelectItem value="next">Vite</SelectItem>
                                         
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>
                                </form>
                              </CardContent>
                              <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancel</Button>
                                <Button>Deploy</Button>
                              </CardFooter>
                            </Card>
        </ResizablePanel>
    </ResizablePanelGroup>
       

<div className=' bg-slate-700 p-3 flex'>
  <p className=' font-semibold text-4xl'>
    Dashboard
  </p>
  <div>
 
  </div>
</div>



      </div>
    )
  }else{
    redirect("/")
    return(
      <div>no access</div>

      )
  }

  }

export default Page