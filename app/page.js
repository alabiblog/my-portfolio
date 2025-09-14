 "use client"

import { db } from "@/config/firebase.config";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { Formik, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import * as yup from "yup"
import {useSession} from "next-auth/react"
import { useState } from "react";



 


const schema = yup.object().shape({
  fullName: yup.string().required("Name Is Required"),
  email: yup.string().required("Email Is Required"),
  message: yup.string().required("Message Is Required"),
})

export default function Home() {
  const [open,setOpen]= useState(false)
  const {data : session} = useSession();
  const handleClose = ()=>{
    setOpen(false)
  }
  const {handleBlur,handleChange,handleSubmit,touched,errors,values} =useFormik({
      initialValues: {
        fullName: "",
        email: "",
        message: "",
      },
      onSubmit:async (values,{resetForm})=>{
        await addDoc (collection(db,"user-comments"),{
          user:session?.user?.id || null,
          fullName: values.fullName,
          email: values.email,
          message: values.message,
          timeCreated: new Date().getTime(),
        }).then(()=>{
          setOpen(true)
          resetForm()
        })
        .catch((error)=>{
          setOpen(false)
          alert("Unable To Submit")
        })
          
      },
      validationSchema: schema 
  })
  return (
   

    
     <main className="min-h-screen max-w-screen">
            <div className="md:flex  md:relative">
                <div className="h-170 bg-blue-700  justify-center p-2 justify-between md:h-170 md:w-265 lg:h-150  lg:w-250">
                 <h1  className="text-5xl p-10 text-lime-300 font-bold md:p-20">Full Stack<br/>Developer<span className="text-white text-2xl font-bold">•</span></h1>
                 <h1  className="p-10 text-white font-semibold md:p-20">Proffesional Full-Stack Website Developer Specializing In Building Fast,Scable, And User Friendly Application I Work With Both Front-end And Back-end Technologies  To Deliver Complete Digital Solution And Take Your Business To The Global Level !!!</h1>
                 <div className="grid grid-cols-2 p-10 md:p-0 md:ml-20">
                  <h1 className="text-sm text-lime-300">I Help Businesses<br/> Turn Ideas Into Powerful Websites And Application<br/>That Drives Result</h1>
                  <h1 className="text-sm text-lime-300">My Focus Is Always On Quality,Performance And Client Satisfaction</h1>
                 </div>
                 </div>
                <div className="h-95 bg-lime-300 md:h-170 md:w-110 lg:h-150 lg:w-110">
                  <div className="flex justify-center py-10 ">
                 <Image
                width={90}
                height={90}
                src={"/myprofile.jpg"}
                alt="profile"
                className=" h-60 w-50 md:h-60 md:w-70 md:absolute md:top-15 md:right-25 lg:top-15 lg:right-70"/>
                </div>
               </div>
            </div>
            <div className="md:flex lg:flex md:py-5">
               <div className="border-b-2 shadow-lg h-80 py-2 mx-4 md:w-full lg:w-full md:h-140 lg:h-140">
                <h1  className="text-2xl font-bold text-blue-700 p-10 lg:p-20 md:p-20">Here´s a Projext I Have Built Using<br/>React and Node.js.</h1>
                <Link href={"/components/project"} ><button className="border p-3 text-blue-700 ml-10 mt-10 py-5 lg:ml-20 md:ml-20 cursor-pointer hover:bg-lime-300 hover:shadow-lg shadow-blue-700">See My Work →</button></Link>
               </div>
               <div className="shadow-lg h-80  mx-4 md:w-full lg:w-full md:h-140 lg:h-140">
                  <h1 className="text-2xl font-bold text-blue-700 p-10 lg:p-20 md:p-20">View<br/>Reśume</h1>
                <Link href={"/components/resume"}><button className="border p-3 text-blue-700 ml-10 mt-20 md:mt-10 lg:mt-10 py-5 lg:ml-20 md:ml-20 cursor-pointer hover:bg-lime-300 hover:shadow-lg shadow-blue-700">See My Reśume →</button></Link>
               </div>
            </div>

            <div className="">
               <h1  className="text-2xl mt-25 ml-10 font-semibold md:text-5xl lg:text-5xl text-blue-700 md:font-bold lg:font-bold md:text-center lg:text-center">Send me a<br/> message<span> ‼ </span></h1>
              <p  className="text-sm ml-10 mt-3 font-semibold md:text-center lg:text-center md:text-lg lg:text-lg">Got a question or proposal, or just<br/>want to say hello? go ahead.</p>
              
              
              <form onSubmit={handleSubmit} className="ml-10 mt-15 md:text-center" >
             <div>
              <TextField
              placeholder="Enter Your Name"
              label="Enter Your Name"
              type="text"
              InputLabelProps={{shrink:true}}
              id="fullName"
              className=" md:w-180 lg:w-180"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}/>
              {touched.fullName && errors.fullName ? <span className="text-xs text-red-700">{errors.fullName}</span> : null}
             </div>
             <div className="mt-7">
              <TextField
              placeholder="Enter Your Email"
              label="Enter Your Email"
              type="email"
              InputLabelProps={{shrink:true}}
              id="email"
              className="md:w-180 lg:w-180"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}/>
              {touched.email && errors.email ? <span className="text-xs text-red-700">{errors.email}</span> : null}
             </div>
             <div className="mt-7">
              <TextField
              placeholder="Hi i think we need  a proffesional website for our business or Company. How soon can we hope on you to get it done?."
              label="Your Message"
              type="text"
              multiline
              rows={7}
              InputLabelProps={{shrink:true}}
              id="message"
              className="md:w-180 lg:w-180"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}/>
              {touched.message && errors.email ? <span className="text-xs text-red-700">{errors.email}</span> : null}
              </div>
              <div className="my-3">
              <button type="submit" className="border p-2 w-30 text-blue-700 bg-lime-300 font-bold m:w-50 lg:w-50 hover:text-lime-300 hover:bg-blue-700 rounded">Send</button>
              </div>
             </form>
            </div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Success</DialogTitle>
              <DialogContent>
                <Typography>Message Submitted Succefully</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" variant="contained" autoFocus>Close</Button>
              </DialogActions>

            </Dialog>



             <div className="relative h-64 bg-lime-300  clip-wave">

             </div>

            
        </main>
    ); 
  }
