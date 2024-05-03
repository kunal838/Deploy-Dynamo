import React from 'react'
import Change from './Change'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar,AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';


function Navbar() {
  const {data:session}=useSession();
  let isMobile = window.matchMedia("(max-width: 600px)").matches;

  if(session){
    return(
      
      <nav className='  flex items-center justify-between'>
          <p className=' font-semibold text-xl p-4'>
              D-D
          </p>
          <div className='p-4  flex space-x-5'>
          <Avatar>
    <AvatarImage src={session.user?.image} />
    <AvatarFallback>session.user.name</AvatarFallback>
  </Avatar>
          <Change/>
          <Sheet>
  <SheetTrigger>
    <Button>LogOut</Button>
  </SheetTrigger>
  <SheetContent side={isMobile?"bottom":"left"} className='   '>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This will signOut your device
        <br/>
        <Button className='m-2' onClick={()=>signOut()}>
          sign Out
        </Button>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
          </div>
          
          
      </nav>
    )
  }
 
  return (
    

    <>
    <nav className='  flex items-center justify-between'>
        <p className=' font-semibold text-xl p-4'>
            D-D
        </p>
        <div className='p-4'>
        
        <Change/>
        </div>
        
        
    </nav>
   
    </>
    
  )
}

export default Navbar