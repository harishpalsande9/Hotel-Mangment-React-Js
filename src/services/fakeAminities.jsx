export const aminities = [
  {
    id: "1",
    roomNo: "102",
    roomType: "Deluxe",
    pillow: "2",
    blanket: "1",
    towel: "2",
    soaps: "2",
    hangers: "4",
    tvRemote: "2",
    acRemote: "1",
  },
  {
    id: "2",
    roomNo: "203",
    roomType: "Super Deluxe",
    pillow: "2",
    blanket: "1",
    towel: "2",
    soaps: "2",
    hangers: "2",
    tvRemote: "1",
    acRemote: "1",
  },
  {
    id: "3",
    roomNo: "302",
    roomType: "Double Bed",
    pillow: "1",
    blanket: "1",
    towel: "1",
    soaps: "1",
    hangers: "2",
    tvRemote: "1",
    acRemote: "1",
  },
];

export function getAllAminities() {
  return aminities.filter((g) => g);
}
