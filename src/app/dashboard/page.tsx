"use client"
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from '@/components/ui/separator'


 function Page() {
  const {data} = useSession()
  let isMobile = window.matchMedia("(max-width: 600px)").matches;
  const [d,setD] = useState([])
   const works = [
    {
      artist: "Ornella Binni",
      art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
      artist: "Tom Byrom",
      art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
      artist: "Vladimir Malyavko",
      art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
  ]

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
useEffect(()=>{
  async function fethUserInfo(){
    fetch("/api/getdata")
    .then(response => response.json())
        
    .then(data => setD(data.message.projects));
    
  
  }

  
  fethUserInfo();
},[])

  if(data){
    console.log(d);
    
    return (
      <div>
       
        <Navbar/>
        
        <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen max-w-screen w-screen border-t-[0.09px] opacity-100"
    >
      <ResizablePanel defaultSize={isMobile?0:25}>
      <ScrollArea className=" h-3/4 w-full ">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">List of your projects</h4>

        {
        
        d.map((tag) => (
          <>
            <div key={tag._id} className="text-sm">
            <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>hurray your project is deployed</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Link</Label>
              <Label htmlFor="name">{tag.link}</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              
              
            </div>
          </div>
        </form>
      </CardContent>
     
    </Card>
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
    
    
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex flex-row   p-6">
        <ScrollArea className="w-full whitespace-nowrap rounded-md ">
          {/* <span className="font-semibold">{d.map((de)=>(
              
             
              <Card >
              <CardHeader>
                <CardTitle>Project id {de._id}</CardTitle>
                
              </CardHeader>
              <CardContent >
                <form>
                  <div className="grid w-full  items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Link</Label>
                      <Label htmlFor="name">{de.link}</Label>
                     
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Hurray your ebsite is now live</Label>
                     
                    </div>
                  </div>
                </form>
              </CardContent>
             
            </Card>
            
          ))}</span> */}




<ScrollArea className="w-full h-82 whitespace-nowrap rounded-md ">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-72 w-72 object-cover"
               
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
           <ScrollBar orientation="horizontal" />
           
          </ScrollArea>
          
        </div>
        <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
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
                                      <Label htmlFor="name">Github Link</Label>
                                      <Input id="name" placeholder="github link" />
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
                               
                                <Button>Deploy</Button>
                              </CardFooter>
                            </Card>
                           
        </ResizablePanel>
    </ResizablePanelGroup>
       





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