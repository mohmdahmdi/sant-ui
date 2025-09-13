"use client";

import { Button } from "@/stories/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useNavigate } from "storybook/internal/router";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b py-2 border-neutral-200 flex items-center justify-between">
      <div className="flex gap-x-2 items-center">
        {/* <div></div>*/} {/* for logo */}
        <div className="flex flex-col items-center">
          <span>سانتال</span>
          <span className="text-sm">متن جذب کاربر</span>
        </div>
        <div>گزینه اول</div>
        <div>گزینه دوم</div>
        <div>رزرو نوبت</div>
        <div>ورود ارائه دهنده</div>
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
