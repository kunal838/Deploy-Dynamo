import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User"
import connect from "@/utils/db"
import { AuthOptions } from "next-auth";


export const authOptions: AuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.clientId,
            clientSecret:process.env.clientSecret
        })
    ],
    callbacks:{
        async signIn({ user, account }) {
            if(account.provider=="google"){
                await connect();
                try {
                    const existingUser = await User.findOne({email:user.email});
                    if(!existingUser) {
                        const newUser = new User({
                            email:user.email,
                        });
                        await newUser.save();
                        return true
                    }
                    return true;
                } catch (error) {
                    console.log("error saving in database",err);
                    return false;
                    
                }
            }
        }

    },
   
    

    secret:process.env.NEXTAUTH_SECRET,
 }