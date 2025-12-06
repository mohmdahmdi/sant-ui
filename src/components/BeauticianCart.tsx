import { IoPersonCircleOutline } from "react-icons/io5";
import React from "react";
import { BeauticianByBusiness } from "@/services/api";
import { FaNumber } from "@/utils/FaNumber";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

function BeauticianCart({ item }: { item: BeauticianByBusiness }) {
  return (
    <div className="col-span-1 flex flex-col items-center rounded-2xl overflow-hidden bg-white shadow-e3">
      <div className="w-full relative flex justify-center">
        <IoPersonCircleOutline className="text-primary-800/40" size={200} />
      </div>
      <div className="m-2 mt-3">
        <p className="font-bold text-primary-700 text-center">
          {item.full_name}
        </p>
        <div className="flex items-center justify-between mt-1 gap-x-5 w-full">
          <div className="flex items-center gap-x-1">
            <p className="text-neutral-600">سابقه فعالیت: </p>
            <p className="text-sm text-primary-800">
              {FaNumber(item.experience_years || 0)} سال
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-neutral-600">امتیاز: </p>
            <p className="text-sm text-primary-800">
              {FaNumber(item.rating || 0)}
            </p>
          </div>
        </div>
        <div className="text-center text-sm mt-2 text-primary-600">
          {item.bio}
        </div>
        <div className="w-full h-[1px] bg-neutral-200 mt-2"></div>
        <Link
          href={"/business/profile/" + item.id}
          className="flex justify-between items-center px-1 mt-2 text-neutral-600 hover:cursor-pointer
                   hover:text-secondary-800! hover:font-medium transition-all ease-in-out duration-400"
        >
          <p>مشاهده پروفایل متخصص</p>
          <FaArrowLeftLong className="hover:text-secondary-800" size={20} />
        </Link>
      </div>
    </div>
  );
}

export default BeauticianCart;
