export const FaNumber = (value: number | string, sign?: boolean) => {
  const persian = new Intl.NumberFormat("fa-IR").format(Number(value));
  return sign ? `${persian}${Number(value) > 0 ? "+" : ""}` : persian;
};
