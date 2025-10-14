import services from "@/services";
import React from "react";

const Page = async ({ params }: { params: { id: string; slug?: string[] } }) => {
  const resolvedParams = await params;
  const { id, slug = [] } = resolvedParams;

  const needsBeauticianInfo = "about" === slug[0] || "";

  let businessInfo = null;
  if (needsBeauticianInfo) {
    businessInfo = await services.getBusinessInfo(id);
  }

  let content;

  switch (slug.join("/")) {
    case "":
      content = (
        <div className="p-6">محتوای خدمات برای کسب‌وکار #{params.id}</div>
      );
      break;
    case "about":
      content = (
        <div className="p-6">محتوای درباره ما برای کسب‌وکار #{businessInfo?.description} ---  {businessInfo?.name} --- </div>
      );
      break;
    case "staff":
      content = <div className="p-6">لیست کارکنان کسب‌وکار #{params.id}</div>;
      break;
    case "reviews":
      content = (
        <div className="p-6">نظرات و امتیازات کسب‌وکار #{params.id}</div>
      );
      break;
    case "showcases":
      content = <div className="p-6">نمایش نمونه کار ها</div>;
      break;
    default:
      content = <div className="p-6 text-red-500">صفحه مورد نظر یافت نشد.</div>;
  }

  return <main className="min-h-[50vh] container">{content}</main>;
};

export default Page;
