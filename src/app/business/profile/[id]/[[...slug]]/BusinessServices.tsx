import ServiceCard from "@/components/ServiceCard";
import { getServicesByBusinessId } from "@/services/api";
import { notFound } from "next/navigation";
import React from "react";

const BusinessServices = async ({ businessId }: { businessId: string }) => {
  const data = await getServicesByBusinessId(businessId);

  if (!Array.isArray(data)) {
    notFound();
  }
  return (
    Array.isArray(data) && (
      <div className="my-20 mt-10 flex flex-col gap-y-3">
        {data.map((item, idx) => (
          <ServiceCard key={`business-service-${idx}`} item={item} />
        ))}
      </div>
    )
  );
};

export default BusinessServices;
