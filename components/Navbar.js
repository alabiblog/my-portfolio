 "use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";


export function Navbar(){
    const[visible,setVisible]= useState(false)
    const menu = ["Services", "The Team", "Our Story", "News & Events", "Contact"];

    return(
        <main className=" w-full">
                 <div className="flex">

            <div className="flex justify-between p-6 bg-blue-700 w-full lg:h-30  md:h-30  lg:w-243 xl:w-248 md:p-10">
             <h1 className="text-2xl text-lime-300 ml-2 font-bold md:text-4xl">Jimoh<br/>Sherif</h1>
              <div className=" absolute right-10">
              <button onClick={()=>setVisible(!visible)} className="text-4xl font-bold">{visible? "" : <RxHamburgerMenu />}</button>
              </div>     
            </div>
            <div className="hidden md:block bg-lime-300 md:h-30 w-110">
            {/* <div className="hidden md:block md:flex md:justify-end p-10">
              <button onClick={()=>setVisible(!visible)} className="text-4xl font-bold">{visible? "⇶" : "✕"}</button>
               
                </div> */}
                
            </div>
           
            </div>
           <div      
            className={`fixed z-50  top-0 right-0 h-full w-full bg-blue-700 lg:bg-black md:bg-lime-300 lg:w-80 lg:h-full   xl:w-96 duration-1000 ease-in-out ${visible? "translate-x-0" : "translate-x-full"}`}>
             <button onClick={()=>setVisible(false)} className="text-4xl font-bold absolute right-11 top-5 text-lime-300">✕</button>
            <div className="p-20">
            <Link href={"/"} onClick={()=>setVisible(false)}><p className="text-lime-300 font-bold md:text-blue-700">Home</p></Link>
            <Link href={"/components/project"} onClick={()=>setVisible(false)}><p className="text-lime-300 font-bold md:text-blue-700">Few Of My Work</p></Link>
            <Link href={"/components/resume"} onClick={()=>setVisible(false)}><p className="text-lime-300 font-bold md:text-blue-700">My Reśume</p></Link>
            <Link href={"/auth/login"} onClick={()=>setVisible(false)}><p className="text-lime-300 font-bold md:text-blue-700">Login</p></Link>
            <Link href={"/dashboard/profile"} onClick={()=>setVisible(false)}><p className="text-lime-300 font-bold md:text-blue-700 text-2xl mt-2 lg:absolute lg:top-1 lg:right-2"><CgProfile /></p></Link>
            
            </div>
            
            </div>
            
          

   
             
      
      
            
        </main>
    )
}




