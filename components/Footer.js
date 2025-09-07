"use client"

import Link from "next/link"

export function Footer(){
    const year = new Date().getFullYear()
    return(
        <main>
            <div className="max-w-screen bg-black h-120">
              <h1 className="p-10 text-lg text-lime-300">Say Hello</h1>
              <h1 className="ml-10 text-sm text-white">jimohsherif000@gmail.com</h1>
              <h1 className="ml-10 text-sm text-white mt-5">WhatsApp Me</h1>
            <Link href={"/components/project"} ><h1 className="ml-10 text-sm text-white mt-20">Few Of My Works</h1></Link>
              <h1 className="ml-10 text-sm text-white mt-5">My Resume</h1>

              <hr className="border-2 text-lime-300 mt-10 mx-10"/>
              <p className="text-lime-300 p-10">© Jimoh Sherif {year} </p>
            </div>
        </main>
    )
}