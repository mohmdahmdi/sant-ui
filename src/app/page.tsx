"use client";

import { usePopularServiceCategories } from "@/hooks/apiHooks";
import FilterIcon from "../assets/svg/FilterIcon";
import Search from "../stories/Search/Search";
import CategoryItem from "@/components/CategoryItem";
import HeroIcon from "../assets/svg/HeroIcon";
import dynamic from "next/dynamic";
import {
  FaChartLine,
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { Kpi } from "../stories/Kpi/Kpi";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <p className="h-96 flex items-center justify-center">Loading map...</p>
  ),
});

export default function Home() {
  const {
    popularCategories,
    isLoadingErrorPopularCategories,
    isErrorPopularCategories,
  } = usePopularServiceCategories(8);

  const isLoading = false;

  const kpiData = [
    {
      icon: <FaChartLine size={32} />,
      title: "+5000 بیزینس فعال",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.",
    },
    {
      icon: <FaUsers size={32} />,
      title: "+5000 بیزینس فعال",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.",
    },
    {
      icon: <FaDollarSign size={32} />,
      title: "+5000 بیزینس فعال",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.",
    },
    {
      icon: <FaShoppingCart size={32} />,
      title: "+5000 بیزینس فعال",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.",
    },
  ];
  return (
    <main className="container mx-auto px-6">
      {/* Hero Section */}
      <section className="grid grid-cols-12 gap-6 h-[85vh] items-stretch pb-2">
        {/* Filters */}
        <div className="col-span-3 bg-white shadow-md rounded-2xl p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-sm text-primary-800 font-bold">فیلترها</p>
            <span className="h-px w-full bg-gray-300" />
            <FilterIcon />
          </div>
          <Search placeHolder="جستجو..." value="" onChange={(text) => {}} />
        </div>

        {/* Categories + Map */}
        <div className="col-span-5 flex flex-col">
          {isLoading ? null : (
            <div className="w-full overflow-hidden mb-4">
              <div className="ltr flex animate-marquee gap-x-8">
                {popularCategories?.map((item, index) => (
                  <CategoryItem
                    key={`cat-1-${index}`}
                    name={item.name}
                    id={item.id}
                  />
                ))}
                {popularCategories?.map((item, index) => (
                  <CategoryItem
                    key={`cat-2-${index}`}
                    name={item.name}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="flex-1 bg-white rounded-2xl shadow-md p-3">
            <Map />
          </div>
        </div>

        {/* Hero Text */}
        <div className="col-span-4 relative flex flex-col items-center gap-y-4 justify-center">
          <p className="mr-6 text-[29px] leading-snug">
            با{" "}
            <span className="text-secondary-800 text-4xl font-extrabold">
              سانتال!
            </span>{" "}
            بهترین ورژن خودتان را به نمایش بگذارید
          </p>
          <HeroIcon className="w-[400px] h-[400px] opacity-90" />
        </div>
      </section>

      <Kpi
        primary
        color="primary"
        className="w-full"
        label="Quarterly KPIs"
        onClick={() => console.log("KPI clicked!")}
        data={kpiData}
      />

      <section className="h-[40vh] w-full bg-white shadow-md rounded-2xl mb-6"></section>
    </main>
  );
}
