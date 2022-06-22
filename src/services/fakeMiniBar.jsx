export const minibars = [
  {
    id: "1",

    guestDetails: {
      name: "Naved Riyaz Naik",
      status: "confirm",
      roomNo: "102",
      roomType: "Deluxe",
    },
    miniBar: [
      {
        item: "Thumbs Up",
        price: "25",
        qty: "2",
        subTotal: "50",
      },
    ],
    payment: {
      grandTotal: "50",
      advance: "0",
      pending: "50",
    },
  },
];

export function getAllMiniBars() {
  return minibars.filter((g) => g);
}
