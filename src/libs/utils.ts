// lib/utils.ts
export const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }