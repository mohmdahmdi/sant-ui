import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

type NamedQueryResult<TData, TError, TName extends string> = {
  [K in keyof UseQueryResult<TData, TError> as K extends "data"
    ? TName
    : K extends `is${string}`
    ? `${K}${Capitalize<TName>}`
    : K]: UseQueryResult<TData, TError>[K];
};

export function useApi<TQueryFnData, TName extends string, TError = unknown>(
  key: (string | number)[],
  queryFn: () => Promise<TQueryFnData>,
  name: TName,
  options?: Omit<UseQueryOptions<TQueryFnData, TError>, "queryKey" | "queryFn">
): NamedQueryResult<TQueryFnData, TError, TName> {
  const query = useQuery<TQueryFnData, TError>({
    queryKey: key,
    queryFn,
    ...options,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {
    ...query,
    [name]: query.data,
  };

  // dynamically attach renamed flags
  for (const key of Object.keys(query)) {
    if (key.startsWith("is")) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result[`${key}${capitalize(name)}`] = (query as any)[key];
    }
  }

  return result;
}

function capitalize<S extends string>(s: S): Capitalize<S> {
  return (s.charAt(0).toUpperCase() + s.slice(1)) as Capitalize<S>;
}
