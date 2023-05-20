import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="shadow-sm border-b bg-white sticky z-50 top-0 ">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative w-24 h-24  items-center hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            alt="img"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative w-10 lg:hidden items-center  flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            alt="img"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500  " />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 block bg-gray-50 w-full sm:text-sm border-gray-300 focus:ring-black  rounded-md focus:border-black"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex justify-end items-center space-x-4 ">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

{session? (
    <>
  
 <div className="navBtn relative">
 <PaperAirplaneIcon className="rotate-45 navBtn" />
 <div className="absolute -right-2 -top-1 text-xs h-5 w-5 bg-red-500 flex items-center justify-center rounded-full animate-pulse text-white">
   3
 </div>
</div>

<PlusCircleIcon className="navBtn" />
<UserGroupIcon className="navBtn" />
<HeartIcon className="navBtn" />
<div className="h-10 rounded-full">
 <img
   src={session.user.image}
   alt="img"
   className="rounded-full w-10 h-full cursor-pointer"
 />
</div>
</>
): <button onClick={signIn}>Sign In</button> }

         

        </div>
      </div>
    </div>
  );
};

export default Header;
