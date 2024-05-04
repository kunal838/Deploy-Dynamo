import {NextRequest, NextResponse} from "next/server";
import project from "@/models/Project";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/utils/authOptions";
import connect from "@/utils/db";
import user from "@/models/User"
export async function GET (request: NextRequest){
    const session = await getServerSession(authOptions)
    await connect();
    const id = await user.findOne({email:session?.user?.email});
    const userProjects = await project.findOne({ user: id._id });

    const greeting = "Hello World!!"
    const json = {
        "message":userProjects
    };
    
    return NextResponse.json(json);
}