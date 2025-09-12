

import { auth, signOut } from "@/auth";
import { Button } from "@mui/material";
import Image from "next/image";






export default async function Profile(){
    const session = await auth();
    console.log(session)
    return(
        <main className="min-h-screen shadow-xl mx-10 my-10 lg:mx-50 xl:mx-100">
            <div className="flex justify-center mt-3">
           <Image
           width={30}
           height={30}
           src={session?.user?.image}
           alt="profile"
           className="h-20 w-20 rounded-full"/>
           </div>
           <p className="text-center border-b mt-5">{session?.user?.name}</p>
           <p className="text-center border-b mt-5">{session?.user?.email}</p>
           <p className="text-center border-b mt-5">User ID: {session?.user?.id}</p>
           <form
           action={async()=>{
            "use server"
            await signOut()
           }}>
           
            <Button fullWidth color="error" type="submit">LogOut</Button>
           </form>
        </main>
    )
}