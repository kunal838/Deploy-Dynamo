import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User"
import connect from "@/utils/db"




export const authOptions = {
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
 const handler = NextAuth(authOptions)

export {handler as GET,handler as POST }
