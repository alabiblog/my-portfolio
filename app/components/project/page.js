import Link from "next/link";

export default function Project() {
  return (
    <main className="min-h-screen max-w-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="flex justify-center p-10">
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-stone-700">
          <span className="text-stone-400 font-bold">/</span>My Work
          <span className="text-stone-400 font-bold">.</span>
        </h1>
      </div>
      <h1 className="text-xl md:text-2xl lg:text-2xl text-center mx-5 mb-8 text-gray-600">
        Few works I have done in the past.
      </h1>
      <div className="grid py-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
          <div className="w-full h-32 flex items-center justify-center bg-blue-700 rounded-t-2xl">
            <h1 className="text-center text-3xl text-lime-300 font-bold">JIMOH SHERIF</h1>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h1 className="font-semibold mb-4 text-gray-800">My Portfolio Website</h1>
            <Link href={"http://localhost:3000/"}>
              <span className="text-blue-700 hover:underline font-medium">www.my-portfolio</span>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
          <div className="w-full h-32 flex items-center justify-center bg-blue-700 rounded-t-2xl">
            <h1 className="text-center text-3xl text-lime-300 font-bold">AGENT9JA</h1>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h1 className="font-semibold mb-4 text-gray-800">
              Rently is a web app that makes payment of rent between Landlord and Tenant very easy. Tenants pay rent easily from home.
            </h1>
            <Link href={"https://agent9ja.vercel.app/"}>
              <span className="text-blue-700 hover:underline font-medium">www.agent9ja.com</span>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
          <div className="w-full h-32 flex items-center justify-center bg-blue-700 rounded-t-2xl">
            <h1 className="text-center text-3xl text-lime-300 font-bold">SHERIFSTORE</h1>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h1 className="font-semibold mb-4 text-gray-800">Personal Website</h1>
            <Link href={"https://sherifstore.vercel.app/"}>
              <span className="text-blue-700 hover:underline font-medium">www.sherifstore.com</span>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
          <div className="w-full h-32 flex items-center justify-center bg-blue-700 rounded-t-2xl">
            <h1 className="text-center text-3xl font-bold  text-lime-300 ">REALTOR</h1>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h1 className="font-semibold mb-4 text-gray-800">Personal Website</h1>
            <Link href={"https://realtors-six.vercel.app/"}>
              <span className="text-blue-700 hover:underline font-medium">www.realtor.com</span>
            </Link>
          </div>
        </div>
        
        
      </div>
    </main>
  );
}





 









//  import Link from "next/link";

//  export default function Project(){
//      return(
//          <main className="min-h-screen max-w-screen bg-gray-200">
//              <div className="flex justify-center p-10">
//                  <h1 className="text-4xl md:text-5xl lg:text-5xl text-stone-700 "><span className="text-stone-400 md:text-5xl lg:text-5xl font-bold">/</span>My Work<span className="text-stone-400 md:text-5xl lg:text-5xl font-bold">.</span></h1>
//              </div>
//                <h1 className="text-1xl  md:text-2xl lg:text-2xl text-center mx-5">Few works i have done in the past.</h1>
//            <div className="grid py-10 md:grid-cols-3 lg:grid-cols-3  lg:py-10 xl:py-20 xl:ml-5 xl:gap-5">
//               <div className="mx-2 w-100 shadow-xl h-80 bg-white lg:mx-5 xl:mx-0 lg:w-80 xl:w-100">
//                  <div className="w-full h-50 shadow-xl bg-blue-700 ">
//                     <h1 className="text-center py-17 text-3xl text-lime-300">JIMOH SHERIF</h1>
//                  </div>
//                  <h1 className="font-semibold ml-7 mt-7">My Portfolio Website</h1>
//                    <Link href={"http://localhost:3000/"}><h1 className="ml-7 mt-7 text-blue-700">www.my-portfolio</h1></Link>
//               </div>
//                <div className="mx-2 mt-5 md:mt-0 lg:mt-0 w-100 shadow-xl h-100 bg-white lg:w-80 xl:w-100">
//                  <div className="w-full h-50 shadow-xl bg-blue-700">
//                     <h1 className="text-center py-17 text-3xl text-lime-300 ">Rently</h1>
//                  </div>
//                    <h1 className="font-semibold ml-7 mt-7">Rently is a web app that make payment of rent between Landlord and Tenant very easy ,its an Application were tenant pays there rent easily in the comfort of there home</h1>
//                    <Link href={"https://rently-two.vercel.app"}><h1 className="ml-7 mt-7 text-blue-700">www.rently.com</h1></Link>
                  
//               </div>
//                <div className="w-100  mx-2 mt-5  md:mt-0 lg:mt-0 lg:w-97 shadow-xl h-80 bg-white lg:w-80 xl:w-100">
//                  <div className="w-full h-50 shadow-xl  bg-blue-700">
//                     <h1 className="text-center py-17 text-lime-300 text-3xl">REALTORS</h1>
//                  </div>
//                    <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
//                    <Link href={"https://realtors-six.vercel.app/"} className="ml-7 mt-7 text-blue-700">www.realtors</Link>
//               </div>
//                <div className="mx-2 mt-5 w-100 shadow-xl h-80 bg-white md:mt-3 lg:mt-3 lg:w-80 xl:w-100">
//                  <div className="w-full h-50 shadow-xl bg-gray-200">
//                     <h1 className="text-center py-17 text-3xl">UNDER BUILDING</h1>
//                  </div>
//                    <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
//                    <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
//               </div>
//                <div className="mx-2 mt-5 w-100 shadow-xl h-80 bg-white d:mmt-3 lg:mt-3 lg:w-80 xl:w-100">
//                  <div className="w-full h-50 shadow-xl bg-gray-200">
//                     <h1 className="text-center py-17 text-3xl">UNDER BUILDING</h1>
//                  </div>
//                    <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
//                    <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
//               </div>
//                <div className="w-100 mx-2 mt-5 lg:w-97 shadow-xl h-80 bg-white md:mt-3 lg:mt-3 lg:w-80 xl:w-100">
//                  <div className="w-full h-50 shadow-xl bg-gray-200">
//                     <h1 className="text-center py-17 text-3xl">UNDER BUILDING</h1>
//                  </div>
//                    <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
//                    <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
//               </div>
//                <div className="mx-2 mt-5 w-100 shadow-xl h-80 bg-white md:mt-3 lg:mt-3 lg:w-80 xl:w-100">
//                  <div className="w-full h-50 shadow-xl bg-gray-200">
//                     <h1 className="text-center py-17 text-3xl">UNDER BUILDING </h1>
//                  </div>
//                    <h1 className="font-semibold ml-7 mt-7">Personal Website</h1>
//                    <Link href={"/#cancel"} className="ml-7 mt-7 text-blue-700">jimoh.sherif</Link>
//               </div>
             
             
//            </div>

//          </main>
//      )
//  }