import { getServicesByBusinessId } from "@/services/api";
import React from "react";

const BusinessServices = async ({ businessId }: { businessId: string }) => {
  const data = await getServicesByBusinessId(businessId);
  return (
    <div>
      {data.map((item, idx) => (
        <div key={`business-service-${idx}`}>{item.duration_minutes}</div>
      ))}
    </div>
  );
};

export default BusinessServices;
