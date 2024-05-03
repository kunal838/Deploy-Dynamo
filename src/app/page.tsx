"use client"
import Change from "@/components/Change"
import Login from "@/components/Login"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import * as React from "react"
import { redirect } from 'next/navigation'

export default function Home() {
 
  const { data: session } = useSession()
  if(session){
    console.log(session);
    redirect("/dashboard")
    
  }
  

 
  return (
    <div className="  h-screen    dark:bg-black">
      <Navbar/>
      <div className="md:flex  md:items-center md:justify-center ">
     
      <div className="   flex flex-col items-center justify-center h-screen ">
      <p className="tracking-widest w-full text-3xl  h-40 flex items-center justify-center md:text-6xl font-mono font-extrabold">Deploy-Dynamo</p>
      <Login/>
      
      </div>
      
      </div>
      
    </div>
  )
}


