export const inventory = [
  {
    id: "1",
    batch: "Batch 1",
    pillows: "122",
    blankets: "122",
    boughtOn: "18/12/21",
    boughtBy: "Naved Naik",
    totalPrice: "120001",
    paidIn: "Cash",
  },
];

export function getAllInventory() {
  return inventory.filter((a) => a);
}
