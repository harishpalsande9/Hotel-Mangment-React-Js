export const agents = [
  {
    id: "1",
    name: "Naved Riyaz Naik",
    mobile: "9890980947",
    email: "naiknaved9@gmail.com",
    noOfClients: " 2",
    commission: "1100",
    revenueGenerated: "11,000/-",
  },
];

export function getAllAgents() {
  return agents.filter((g) => g);
}
