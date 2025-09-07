 "use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";


export function Navbar(){
    const[visible,setVisible]= useState(false)

    return(
        <main className=" top-0 left-0 w-full">
                 <div className="flex">

            <div className="flex justify-between p-6 bg-blue-700 w-full lg:h-30  md:h-30 md:w-251 lg:w-250 md:p-10">
             <h1 className="text-2xl text-lime-300 ml-2 font-bold md:text-4xl">Jimoh<br/>Sherif</h1>
              <div className=" absolute right-10">
              <button onClick={()=>setVisible(!visible)} className="text-4xl font-bold">{visible? "" : "⇶"}</button>
              </div>     
            </div>
            <div className="hidden md:block bg-lime-300 md:h-30 w-110">
            {/* <div className="hidden md:block md:flex md:justify-end p-10">
              <button onClick={()=>setVisible(!visible)} className="text-4xl font-bold">{visible? "⇶" : "✕"}</button>
               
                </div> */}
                
            </div>
           
            </div>
            <div
            className={`fixed top-0 right-0 h-40 w-64 bg-blue-700 lg:bg-lime-300 md:bg-lime-300 lg:w-77 lg:h-40  xl:w-96 duration-6000 ease-in-out ${visible? "translate-x-0" : "translate-x-full"}`}>
             <button onClick={()=>setVisible(false)} className="text-4xl font-bold absolute right-10 top-10">✕</button>
            <div className="p-5">
            <Link href={"/"}><p className="text-lime-300 font-bold md:text-blue-700">Home</p></Link>
            <Link href={"/components/project"}><p className="text-lime-300 font-bold md:text-blue-700">Few Of My Work</p></Link>
            <Link href={"/components/resume"}><p className="text-lime-300 font-bold md:text-blue-700">My Reśume</p></Link>
            <Link href={"/auth/login"}><p className="text-lime-300 font-bold md:text-blue-700">Login</p></Link>
            <Link href={"/dashboard/profile"}><p className="text-lime-300 font-bold md:text-blue-700 text-2xl mt-2 lg:absolute lg:top-1 lg:right-2"><CgProfile /></p></Link>
            
            </div>
            
            </div>
             
      
      
            
        </main>
    )
}




