import { auth } from "firebase-admin";
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
           src={"/myprofile.jpg"}
           alt="profile"
           className="h-20 w-20 rounded-full"/>
           </div>
           <p className="text-center border-b mt-5">{session?.user?.name}</p>
           <p className="text-center border-b mt-5">{session?.user?.name}</p>
           <p className="text-center border-b mt-5">User ID: {session?.user?.name}</p>
        </main>
    )
}