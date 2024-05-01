import * as React from "react"

import { Button } from "@/components/ui/button"
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

export default function Login() {
  return (
    <Card className="w-[350px] dark:bg-black dark:border-none ">
      <CardHeader>
        <CardTitle>Login To Get Started</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
         
           <Button variant="outline"  className="flex dark:bg-black dark:border-none">
            <img className=" h-10 p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJKqUujEIzlVqHxSOgRHh5zQIX-zdedw7I4i2e1Ml9Q&s" alt="" />
           Login With Google
           </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
     
      </CardFooter>
    </Card>
  )
}
