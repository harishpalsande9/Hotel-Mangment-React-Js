export const lostFound = [
  {
    id: "1",
    roomNo: "122",
    customerName: "Naved Riyaz Naik",
    lostFound: ["Mobile, Wallet"],
    checkIn: "18/12/21",
    checkOut: "21/12/21",
    foundBy: "Naved Naik",
  },
];

export function getAllLostFound() {
  return lostFound.filter((g) => g);
}
