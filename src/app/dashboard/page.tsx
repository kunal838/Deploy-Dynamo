"use client"
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import React, { useCallback, useEffect, useMemo, useRef, useState} from 'react'

import { redirect } from 'next/navigation'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { Separator } from '@/components/ui/separator'



 function Page() {
  const {data:session} = useSession()
  const [d,setD] = useState([])



  
 
  

 
useEffect(()=>{
  async function fethUserInfo(){
    fetch("/api/getdata")
    .then(response => response.json())
        
    .then(data => setD(data.message.projects));
    
  
  }

  
  fethUserInfo();
},[])



  if(session){
    console.log(d);
    
    return (
      <div>
       
        <Navbar/>
        <div className='     '>
        {
        
        d.map((tag) => (
          <>
            <div key={tag._id} className="text-sm md:flex  ">
            <Card className="w-full   ">
      <CardHeader>
       
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


{/* {
        
        d.map((tag) => (
          <>
            <div key={tag._id} className="text-sm   ">
            <Card className="w-full md:w-56  ">
      <CardHeader>
       
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
        ))} */}