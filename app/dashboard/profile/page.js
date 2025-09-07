import Image from "next/image";

export default function Profile(){
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
           <p className="text-center border-b mt-5">Name:</p>
           <p className="text-center border-b mt-5">Email:</p>
           <p className="text-center border-b mt-5">User ID:</p>
        </main>
    )
}