import React from "react";
import { TopBusinesses } from "../services/api";
import { GoHeart } from "react-icons/go";
import { FaNumber } from "@/utils/FaNumber";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiSparkyBomb } from "react-icons/gi";
import { SiAiohttp } from "react-icons/si";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const TopbusinessCard = ({
  data,
  days,
}: {
  data: TopBusinesses;
  days: number;
}) => {
  return (
    <div className="rounded-2xl bg-white mx-4 overflow-hidden col-span-2 shadow-e1 hover:shadow-e3 transition-all ease-in-out duration-400">
      <div className="bg-skeleton w-full h-[200px] relative">
        <div className="absolute left-2 top-2 bg-white rounded-full p-[1px]">
          {data.is_verified && (
            <RiVerifiedBadgeFill className="text-secondary-800" size={20} />
          )}
        </div>
      </div>
      <div className="m-2 mt-3">
        <div className="flex items-center space-x-1 truncate line-clamp-1">
          <div className="w-6 h-6 bg-skeleton rounded-full"></div>
          <p className="font-bold text-primary-700">{data.name}</p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-neutral-600">
            <span className="hover:cursor-default hover:text-accent-800 hover:font-medium transition-all duration-400 ease-in-out">
              {data.city},{" "}
            </span>
            <span className="hover:cursor-default hover:text-accent-800 hover:font-medium transition-all duration-400 ease-in-out">
              {data.district},{" "}
            </span>
            <span className="hover:cursor-default hover:text-accent-800 hover:font-medium transition-all duration-400 ease-in-out">
              {data.address}
            </span>
          </p>
        </div>
        <div className="flex space-x-3 my-3 mr-[3px]">
          <GiSparkyBomb size={20} className="translate-y-1 text-primary-900" />
          <p className="text-primary-800">
            کسب و کار برتر با بیش از
            <span className="mx-1 text-secondary-800 font-bold">
              {FaNumber(data.total_appointments)}
            </span>
            رزرو موفق در
            <span className="mx-1 text-secondary-800 font-bold">
              {FaNumber(days)}
            </span>
            روز اخیر
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <GoHeart
              className="-translate-y-[1x] text-secondary-800"
              size={20}
            />
            <span className="text-sm font-bold text-secondary-800">
              {FaNumber(data.rating || 0)}
            </span>
          </div>
          {data.website !== "null" && (
            <div className="flex flex-row-reverse items-center gap-x-2 text-sm">
              <SiAiohttp
                size={20}
                className="-translate-y-[2px] text-accent-800"
              />
              <a className="text-accent-800" href={data.website}>
                {data.website}
              </a>
            </div>
          )}
        </div>
        {/* <div className="h-[1px] w-full bg-neutral-200 mt-3"></div> */}
        <Link
          href={"/business/profile/" + data.id}
          className="flex justify-between items-center px-1 mt-4 text-neutral-600 hover:cursor-pointer
                   hover:text-secondary-800! hover:font-medium transition-all ease-in-out duration-400"
        >
          <p>مشاهده صفحه کسب و کار</p>
          <FaArrowLeftLong className="hover:text-secondary-800" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default TopbusinessCard;
