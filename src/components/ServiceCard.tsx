import { ServiceInfo } from "@/services/api";
import { FaNumber } from "@/utils/FaNumber";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";

function ServiceCard({ item }: { item: ServiceInfo }) {
  return (
    <div className="bg-white rounded-2xl shadow-e1 pt-5 pb-2 px-3">
      <div className="flex gap-x-3">
        <div className="w-20 h-20 rounded-full bg-skeleton"></div>
        <div className="w-full">
          <div className="flex justify-between text-primary-800! font-bold">
            <span className="">{item.title}</span>
            <div className="flex items-center gap-x-2">
              <span className="text-sm font-bold">
                {FaNumber(item.rating || 0)}
              </span>
              <GoHeart className="-translate-y-[1px]" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-2 text-primary-700">
            <div className="flex items-center gap-x-2 col-span-1">
              <span className="">قیمت: </span>
              <span className="font-semibold">
                {FaNumber(parseInt(item.price))}
              </span>
              تومان
            </div>
            <div className="flex items-center gap-2 col-span-1">
              <span>مدت زمان: </span>
              <span className="font-semibold">
                {FaNumber(item.duration_minutes)}
              </span>{" "}
              دقیقه
            </div>
            <span className="col-span-2 text-sm text-neutral-600">
              {item.description} .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
              فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد، کتابهای زیادی در{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral-200 mt-2"></div>
      <Link
        href={"/service/timeline/" + item.id}
        className="flex justify-between items-center px-1 mt-2 text-neutral-600 hover:cursor-pointer
                   hover:text-secondary-800! hover:font-medium transition-all ease-in-out duration-400"
      >
        <p>مشاهده جدول زمان بندی</p>
        <FaArrowLeftLong className="hover:text-secondary-800" size={20} />
      </Link>
    </div>
  );
}

export default ServiceCard;
