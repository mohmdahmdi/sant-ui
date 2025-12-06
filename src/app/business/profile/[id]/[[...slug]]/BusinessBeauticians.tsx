import BeauticianCart from "@/components/BeauticianCart";
import { getBeauticiansByBusinessId } from "@/services/api";
import React from "react";

const BusinessBeauticians = async ({ businessId }: { businessId: string }) => {
  const data = await getBeauticiansByBusinessId(businessId);
  return (
    <div className="my-20 mt-10 grid grid-cols-5 gap-y-3 gap-x-5">
      {data.map((item, idx) => (
        <BeauticianCart key={`business-beautician-${idx}`} item={item} />
      ))}
    </div>
  );
};

export default BusinessBeauticians;
