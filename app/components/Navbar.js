"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/assets/LogoBlack.png'
import { useRouter } from "next/navigation";
// import kaptein from '../../public/assets/pdf/kaptein.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
const router = useRouter()
  const HandleNav = () => {
    setNav(!nav);
  };

  const handleLogout=()=>{
        router.push('/')
  }
  return (
    <>
      <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 mb-10  ">
        <div className=" m-auto flex justify-between items-center p-2 text-zinc-100 bg-yellow-500 shadow-lg ">
          <Link href="/">
            <Image src={Logo} width={60} height={20} alt=" main logo" className="ml-4" />
        
          </Link>
          <ul className="hidden sm:flex ">
            {/* <Link href="/" className="hover:text-slate-700">
              {" "}
              <li className="p-4 rounded-md text-zinc-100 hover:text-slate-700 font-semibold hover:cursor-pointer">
                Home
              </li>
            </Link> */}
            <Link href="/dashboard/create" className="hover:text-slate-700">
              <li className="p-4 rounded-lg text-zinc-100 hover:text-slate-700 font-semibold hover:cursor-pointer">
                Create 
              </li>
            </Link>
           
            <Link href="/dashboard/saved" className="hover:text-slate-700">
              {" "}
              <li className="p-4 rounded-lg text-zinc-100 hover:text-slate-700 font-semibold hover:cursor-pointer">
                Saved 
              </li>
            </Link>
            <Link href="#" className="hover:text-slate-700" onClick={handleLogout}>
              <li className="p-4 rounded-lg text-zinc-100 hover:text-slate-700 font-semibold hover:cursor-pointer">
                Log out
              </li>
            </Link>
             
             
          </ul>

          {/* Mobile Button */}
          <div onClick={HandleNav} className="block sm:hidden z-10">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          {/*========================== Mobile Menu=================== */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
           
              <Link href="/dashboard/create">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  Create 
                </li>
              </Link>
             
              <Link href="/dashboard/saved">
                {" "}
                <li
                  onClick={HandleNav}
                  className=" text-4xl text-white hover:text-zinc-100 p-2 "
                >
                  Saved 
                </li>
              </Link>
              <Link href="#">
                {" "} 
                <li 
                  onClick={handleLogout}
                  className="text-4xl text-white hover:text-zinc-100 p-2 "
                >

                  Log out

                </li>
              </Link>
              
             
               
             

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;