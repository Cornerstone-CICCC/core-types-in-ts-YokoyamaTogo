type CustomerInformation = {
  name: string
  email: string
}

type PaymentInformation = {
  method: string
  amount: number
}

type Reservation = {
  customerInformation: CustomerInformation
  paymentInformation: PaymentInformation
  checkIn: Date
  checkOut: Date
}

const reservation: Reservation = {
  customerInformation: { name: "Togo", email: "togo@example.com" },
  paymentInformation: { method: "card", amount: 320 },
  checkIn: new Date("2026-04-10"),
  checkOut: new Date("2026-04-12"),
}

console.log(reservation)
