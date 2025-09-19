import FilterIcon from "../assets/svg/FilterIcon";
import Search from "../stories/Search/Search";
import CategoryItem from "@/components/CategoryItem";
import HeroIcon from "../assets/svg/HeroIcon";
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
import services from "@/services";
import MapClient from "@/components/Map";
import TopbusinessCard from "@/components/TopbusinessCard";

export default async function Home() {
  const popularCategories = await services.getServiceCategories(8);

  const topBusinesses = await services.getTopBusinesses({
    days: 100,
    limit: 5,
  });

  const heroKpis = await services.getKpis();

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
          <Search placeHolder="جستجو..." value="" />
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
            <MapClient />
          </div>
        </div>

        {/* Hero Text */}
        <div className="col-span-4 relative flex flex-col items-center gap-y-4 justify-center">
          <header className="mr-6 text-[29px] leading-snug">
            با{" "}
            <h1 className="text-secondary-800 text-4xl font-extrabold inline">
              سانتال!
            </h1>{" "}
            بهترین ورژن خودتان را به نمایش بگذارید
          </header>
          <figure>
            <HeroIcon className="w-[400px] h-[400px] opacity-90" />
          </figure>
        </div>
      </section>

      <Kpi
        primary
        color="primary"
        className="w-full"
        label="Quarterly KPIs"
        dashed={true}
        data={kpiData}
      />

      <RowLine title="برترین ها" className="mt-2" />

      <section className=" flex">
        {topBusinesses?.map((item, index) => (
          <TopbusinessCard key={"top-business-idx-" + index} data = {item}/>
        ))}
      </section>

      <section className="flex gap-x-6 items-center pt-2 mb-40">
        <div>
          <header>به جمع ارائه دهندگان بپیوندید</header>
          <figure>
            <AppOnPhoneIcon className="h-[376px] !w-[376px]" />
          </figure>
        </div>
        <div className="self-stretch w-full bg-white shadow-e1 rounded-2xl p-7">
          <h2 className="text-xl">
            <b className="font-bold text-primary-600">
              همین حالا بیزنستو ارتقا بده!
            </b>
          </h2>
        </div>
      </section>
    </main>
  );
}
