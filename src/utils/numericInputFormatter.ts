export default function numericInputFormatter(
  input: string,
  isInteger?: boolean
) {
  return input
    .replace(
      !!isInteger
        ? /[^0-9۱۲۳۴۵۶۷۸۹۰٠١٢٣٤٥٦٧٨٩]/g
        : /[^0-9.۱۲۳۴۵۶۷۸۹۰٠١٢٣٤٥٦٧٨٩]/g,
      ""
    )
    .replace(/\.{2,}/, ".")
    .replace(/^(\d*\.\d*?)\..*$/, "$1")
    .replace(/^(\.)/, "0.")
    .replace(/^(?<!\.)[0]+(?=\d)/, "")
    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d) => (d.charCodeAt(0) - 1632).toString())
    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d) => (d.charCodeAt(0) - 1776).toString());
}
