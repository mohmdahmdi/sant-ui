import services from "@/services";
import { BusinessBannerImage, BusinessIcon } from "@/utils/imageLoader";
import Link from "next/link";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { id: string; slug?: string[] };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const businessId = params.id;
  const currentSlug = params.slug || [];

  const businessInfo = await services.getBusinessInfo(businessId);

  const isActive = (tabKey: string[]) => {
    if (currentSlug.length === 0 && tabKey.length === 0) return true;
    return JSON.stringify(currentSlug) === JSON.stringify(tabKey);
  };

  const tabs = [
    {
      name: "خدمات",
      href: `/business/profile/${businessId}`,
      key: [],
    },
    {
      name: "درباره ما",
      href: `/business/profile/${businessId}/about`,
      key: ["about"],
    },
    {
      name: "کارکنان",
      href: `/business/profile/${businessId}/staff`,
      key: ["staff"],
    },
    {
      name: "نظرات و امتیاز",
      href: `/business/profile/${businessId}/reviews`,
      key: ["reviews"],
    },
    {
      name: "نمونه کارها",
      href: `/business/profile/${businessId}/showcases`,
      key: ["showcases"],
    },
  ];

  return (
    <div>
      <div className="w-full h-[200px] relative overflow-hidden">
        <BusinessBannerImage src={businessInfo.cover_image || ""} />
        <div className="absolute inset-0 backdrop-blur-xs brightness-50" />
        <div className="z-100 text-primary-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1>{businessInfo.name}</h1>
          <p></p>
          <p></p>
        </div>
      </div>

      <div className="relative flex border-b border-skeleton">
        <div className="w-fit h-fit p-2 bg-background rounded-full absolute -top-[300%] right-[3%] shadow-e1">
          <div className="w-52 h-52 rounded-full">
            <BusinessIcon
              src={businessInfo.logo || ""}
              name={businessInfo.name}
            />
          </div>
        </div>
        <nav className="flex gap-x-20 mr-[23%] py-3 text-neutral-700 font-[420]">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                ${
                  isActive(tab.key)
                    ? "text-secondary-700 font-semibold"
                    : "text-neutral-700"
                }
                hover:text-secondary-600 transition-colors
              `}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Layout;
