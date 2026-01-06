"use client";

import { Button } from "@/stories/Button/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-e1 py-2 flex flex-col items-center justify-between">
      <div className="flex flex-col flex-1 gap-x-7 items-center text-neutral-700 font-[420]">
        {/* <div></div>*/} {/* for logo */}
        <Link href={"/"} className="flex flex-col items-center">
          <span>سانتال</span>
          <span className="text-sm">متن جذب کاربر</span>
        </Link>
        <Link href={"/"}>خانه</Link>
        <Link href={"/explore"} className="text-secondary-800">
          رزرو نوبت
        </Link>
        <Link href={"/business/profile/1"}>پنل کسب و کار</Link>
        <Link href={"/freelancer"}>فریلنسرها</Link>
        <Link href={"/about"}>درباره ما</Link>
      </div>
      <div className="flex flex-col gap-x-3 ml-3">
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
