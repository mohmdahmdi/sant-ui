import ServiceCard from "@/components/ServiceCard";
import { getServicesByBusinessId } from "@/services/api";
import React from "react";

const BusinessServices = async ({ businessId }: { businessId: string }) => {
  const data = await getServicesByBusinessId(businessId);
  return (
    <div className="my-20 mt-10 flex flex-col gap-y-3">
      {data.map((item, idx) => (
        <ServiceCard key={`business-service-${idx}`} item={item} />
      ))}
    </div>
  );
};

export default BusinessServices;
