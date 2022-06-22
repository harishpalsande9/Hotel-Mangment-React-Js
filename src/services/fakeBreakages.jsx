export const breakages = [
  {
    id: "1",
    roomNo: "102",
    name: "Naved Naik",
    roomType: "Deluxe",
    details: { name: "pillow", qty: "1", charges: "120" },
    status: "Pending",
    remainingAmt: "120",
  },
];

export function getAllBreakages() {
  return breakages.map((g) => g);
}
