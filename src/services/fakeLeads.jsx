export const leads = [
  {
    id: "1",
    name: "Naved Riyaz Naik",
    mobile: "9890980947",
    email: "naiknaved9@gmail.com",
    source: " Agent One",
    nextFollowUp: "20 January 22",
    lastFollowUp: "10January 22",
  },
];

export function getAllLeads() {
  return leads.filter((g) => g);
}
