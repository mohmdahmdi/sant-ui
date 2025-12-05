import { getServicesByBusinessId } from "@/services/api";
import React from "react";

const BusinessServices = async ({ businessId }: { businessId: string }) => {
  const data = await getServicesByBusinessId(businessId);
  return (
    <div>
      {data.map((item, idx) => (
        <div key={`business-service-${idx}`} className="flex">
          <span>{item.title}</span>
          <span>{item.price}</span>
          <span>{item.gender_target}</span>
          <span>{item.rating}</span>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default BusinessServices;
