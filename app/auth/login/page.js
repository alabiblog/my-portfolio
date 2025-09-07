import { auth, signIn } from "@/auth";
import { Button, TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";




export default async function Login(){
  const session = await auth();
  console.log(session);
    return(
        <main className="min-h-screen max-w-screen">
              <p className="text-2xl font-semibold text-center">Sign Up</p>

            <div className="shadow mx-5 flex justify-center ">
              <div className="mt-5">
                <TextField 
                fullWidth
                type="email"
                placeholder="@jimohsherif.com"/>
                <TextField
                fullWidth
                type="password"
                placeholder="Create password"/>
              </div>
            </div>
              <p className="mt-10 text-xs text-center">Or<br/>Sign Up With Goggle</p>
              <form 
              action={async () => {
              "use server"
              await signIn("google")
              }}>
              <div className=" mt-15 shadow bg-blue-700 mx-5 rounded flex justify-center items-center gap-3  p-1">
                 <button className="flex gap-3 ">
                 <FcGoogle className="text-3xl"/>
                 <span type="submit" className="cursor-pointer">Sign Up With Goggle</span>
                 </button>
              </div>
              </form>


        </main>
    )
}