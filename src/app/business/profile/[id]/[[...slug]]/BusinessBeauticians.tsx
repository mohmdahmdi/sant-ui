import { getBeauticiansByBusinessId } from "@/services/api";
import React from "react";

const BusinessBeauticians = async ({ businessId }: { businessId: string }) => {
  const data = await getBeauticiansByBusinessId(businessId);
  return (
    <div>
      {data.map((item,idx) => (
        <div key={`business-beautician-${idx}`}>{item.full_name}</div>
      ))}
    </div>
  );
};

export default BusinessBeauticians;
