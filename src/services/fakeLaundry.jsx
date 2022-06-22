export const laundry = [
  {
    category: "customers",
    name: "customer1",
    qty: "2",
    list: [" Suit", " Jacket", " Tie", " Saree"],
  },
  {
    category: "staff",
    name: "staff1",
    qty: "2",
    list: ["pant", " shirt", " Tie"],
  },
  {
    category: "linen",
    name: "pillow",
    qty: "3",
    list: ["2 Pillows", " 1 Bedsheet", " curtain"],
  },
];

export function getAllLaundry() {
  return laundry.filter((g) => g);
}
