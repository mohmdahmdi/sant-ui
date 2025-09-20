import Link from "next/link";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { id: string; slug?: string[] };
}

const Layout = ({ children, params }: LayoutProps) => {
  const serviceId = params.id;
  const currentSlug = params.slug || [];

  const isActive = (tabKey: string[]) => {
    if (currentSlug.length === 0 && tabKey.length === 0) return true;
    return JSON.stringify(currentSlug) === JSON.stringify(tabKey);
  };

  const tabs = [
    {
      name: "اطلاعات کلی",
      href: `/service/profile/${serviceId}`,
      key: [],
    },
    {
      name: "متخصصین",
      href: `/service/profile/${serviceId}/staff`,
      key: ["staff"],
    },
    {
      name: "نظرات و امتیاز",
      href: `/service/profile/${serviceId}/reviews`,
      key: ["reviews"],
    },
    {
      name: "نمونه کارها",
      href: `/service/profile/${serviceId}/showcases`,
      key: ["showcases"],
    },
  ];

  return (
    <div>
      <div className="bg-skeleton w-full h-[200px]"></div>
      <nav className="flex gap-x-28 py-3 text-neutral-700 font-[420] border-b border-skeleton justify-center">
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

      {children}
    </div>
  );
};

export default Layout;
