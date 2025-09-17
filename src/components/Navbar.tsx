"use client";

import { Button } from "@/stories/Button/Button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-e1 py-2 flex items-center justify-between">
      <div className="flex flex-1 gap-x-7 items-center">
        {/* <div></div>*/} {/* for logo */}
        <Link href={'/'} className="flex flex-col items-center">
          <span>سانتال</span>
          <span className="text-sm">متن جذب کاربر</span>
        </Link>
        <Link href={'/'}>خانه</Link>
        <Link href={'/explore'} className="text-secondary-800">رزرو نوبت</Link>
        <Link href={'/business'}>پنل کسب و کار</Link>
        <Link href={'/freelancer'}>فریلنسرها</Link>
        <Link href={'/about'}>درباره ما</Link>
      </div>
      <div className="flex gap-x-3 ml-3">
        <Link href={"/"}>
          <Button label="پنل کسب و کار" primary={true} color="primary" />
        </Link>
        <Link href={"/explore"}>
          <Button label="ورود/ ثبت نام" color="primary" onClick={() => {}} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
