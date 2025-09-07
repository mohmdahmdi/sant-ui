"use client";

import { usePopularServiceCategories } from "@/hooks/apiHooks";

export default function Home() {
  const { data, isLoading, isError, error } = usePopularServiceCategories(8);
  console.log(error)
  return isLoading || isError ? (
    <div>loading...</div>
  ) : (
    <div>
      {data?.map((cat) => (
        <div key={cat.id}>{cat.name}</div>
      ))}
    </div>
  );
}
