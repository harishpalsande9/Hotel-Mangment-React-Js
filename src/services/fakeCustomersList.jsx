export const customers = [
  {
    id: "1",
    name: "Naved Riyaz Naik",
    mobile: "9890980947",
    email: "naiknaved9@gmail.com",
    dob: "13 June 91",
    anniversary: "26 January 20",
    lastVisit: "15 January",
    preferredRoom: "201",
  },
];

export function getAllCustomers() {
  return customers.filter((g) => g);
}
