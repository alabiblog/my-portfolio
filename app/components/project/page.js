import Link from "next/link";

export default function Project(){
    return(
        <main className="min-h-screen max-w-screen bg-gray-200">
            <div className="flex justify-center p-10">
                <h1 className="text-4xl md:text-5xl lg:text-5xl text-stone-700 "><span className="text-stone-400 md:text-5xl lg:text-5xl font-bold">/</span>My Work<span className="text-stone-400 md:text-5xl lg:text-5xl font-bold">.</span></h1>
            </div>
              <h1 className="text-1xl  md:text-2xl lg:text-2xl text-center mx-5">Few works i have done in the past.</h1>
          <div className="grid py-10 md:grid-cols-3 lg:grid-cols-3  lg:py-10 xl:py-20 xl:ml-5 xl:gap-5">
             <div className="mx-2 w-100 shadow-xl h-80 bg-white lg:mx-5 xl:mx-0 lg:w-80 xl:w-100">
                <div className="w-full h-50 shadow-xl bg-blue-700 ">
                   <h1 className="text-center py-17 text-3xl text-lime-300">JIMOH SHERIF</h1>
                </div>
                  <h1 className="font-semibold ml-7 mt-7">My Portfolio Website</h1>
                  <Link href={"http://localhost:3000/"}><h1 className="ml-7 mt-7 text-blue-700">www.my-portfolio</h1></Link>
             </div>
              <div className="mx-2 mt-5 md:mt-0 lg:mt-0 w-100 shadow-xl h-100 bg-white lg:w-80 xl:w-100">
                <div className="w-full h-50 shadow-xl bg-blue-700">
                   <h1 className="text-center py-17 text-3xl text-lime-300 ">Rently</h1>
                </div>
                  <h1 className="font-semibold ml-7 mt-7">Rently is a web app that make payment of rent between Landlord and Tenant very easy ,its an Application were tenant pays there rent easily in the comfort of there home</h1>
                  <Link href={"https://rently-two.vercel.app"}><h1 className="ml-7 mt-7 text-blue-700">www.rently.com</h1></Link>
                  
             </div>
              <div className="w-100  mx-2 mt-5  md:mt-0 lg:mt-0 lg:w-97 shadow-xl h-80 bg-white lg:w-80 xl:w-100">
                <div className="w-full h-50 shadow-xl bg-gray-200">
                   <h1 className="text-center py-17 text-3xl">UNDER BUILDING</h1>
                </div>
                  <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
                  <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
             </div>
              <div className="mx-2 mt-5 w-100 shadow-xl h-80 bg-white md:mt-3 lg:mt-3 lg:w-80 xl:w-100">
                <div className="w-full h-50 shadow-xl bg-gray-200">
                   <h1 className="text-center py-17 text-3xl">UNDER BUILDING</h1>
                </div>
                  <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
                  <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
             </div>
              <div className="mx-2 mt-5 w-100 shadow-xl h-80 bg-white d:mmt-3 lg:mt-3 lg:w-80 xl:w-100">
                <div className="w-full h-50 shadow-xl bg-gray-200">
                   <h1 className="text-center py-17 text-3xl">UNDER BUILDING</h1>
                </div>
                  <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
                  <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
             </div>
              <div className="w-100 mx-2 mt-5 lg:w-97 shadow-xl h-80 bg-white md:mt-3 lg:mt-3 lg:w-80 xl:w-100">
                <div className="w-full h-50 shadow-xl bg-gray-200">
                   <h1 className="text-center py-17 text-3xl">UNDER BUILDING</h1>
                </div>
                  <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
                  <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
             </div>
              <div className="mx-2 mt-5 w-100 shadow-xl h-80 bg-white md:mt-3 lg:mt-3 lg:w-80 xl:w-100">
                <div className="w-full h-50 shadow-xl bg-gray-200">
                   <h1 className="text-center py-17 text-3xl">UNDER BUILDING </h1>
                </div>
                  <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
                  <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
             </div>
             
             
          </div>

        </main>
    )
}