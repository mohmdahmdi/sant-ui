"use client";

import {
  useHeroKpis,
  usePopularServiceCategories,
  useTopBusinesses,
} from "@/hooks/apiHooks";
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
import { FaNumber } from "@/utils/FaNumber";
import AppOnPhoneIcon from "../assets/svg/AppOnPhoneIcon";
import RowLine from "../stories/RowLine/RowLine";

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

  const { topBusinesses, isLoadingTopBusinesses, isErrorTopBusinesses } =
    useTopBusinesses({ days: 100, limit: 5 });

  const { heroKpis, isLoadingHeroKpis, isErrorHeroKpis } = useHeroKpis();
  const isLoading = false;

  const kpiData = [
    {
      icon: <FaChartLine className="w-7 h-7" />,
      title: `${FaNumber(heroKpis?.total_customers || "", true)} مشتری فعال`,
      description: `مفتخریم از خدمت به بیش از ${FaNumber(
        heroKpis?.total_customers || ""
      )} مشتری فعال`,
    },
    {
      icon: <FaUsers className="w-7 h-7" />,
      title: `${FaNumber(heroKpis?.total_businesses || "", true)} بیزینس فعال`,
      description: "کسب و کار های فعال در سراسر ایران",
    },
    {
      icon: <FaDollarSign className="w-7 h-7" />,
      title: `${FaNumber(
        heroKpis?.total_beauticians || "",
        true
      )} متخصص زیبایی`,
      description: "متخصصان زیبایی فعال در زمینه های مختلف",
    },
    {
      icon: <FaShoppingCart className="w-7 h-7" />,
      title: `${FaNumber(
        heroKpis?.totalActiveAppointments || "",
        true
      )} رزرو موفق`,
      description: "رزرو های موفق درون سامانه",
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
        dashed={true}
        data={kpiData}
      />
      <section className="flex gap-x-6 items-center pt-2 mb-40">
        <div>
          <p>به جمع ارائه دهندگان بپیوندید</p>
          <AppOnPhoneIcon className="h-[376px] !w-[376px]" />
        </div>
        <div className="self-stretch w-full bg-white shadow-e1 rounded-2xl p-7">
          <h2 className="text-xl">
            <b className="font-bold text-primary-600">
              همین حالا بیزنستو ارتقا بده!
            </b>
          </h2>
        </div>
      </section>

      <RowLine title="برترین ها" />
    </main>
  );
}
