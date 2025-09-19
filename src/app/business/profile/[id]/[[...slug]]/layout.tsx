import Link from "next/link";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { id: string; slug?: string[] };
}

const Layout = ({ children, params }: LayoutProps) => {
  const businessId = params.id;
  const currentSlug = params.slug || [];

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
      <div className="bg-skeleton w-full h-[200px]"></div>
      <div className="relative flex border-b border-skeleton">
        <div className="w-fit h-fit p-2 bg-background rounded-full absolute -top-[300%] right-[3%]">
          <div className="w-52 h-52 bg-skeleton rounded-full"></div>
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
