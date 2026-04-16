type CustomerInformation = {
  name: string
  email: string
}

type PaymentInformation = {
  isPayed: boolean
  totalPrice: number
}

type Reservation = {
  customerInformation: CustomerInformation
  paymentInformation: PaymentInformation
  checkIn: Date
  checkOut: Date
  pricePerDay: number
}

const dayMs = 1000 * 60 * 60 * 24

const calcTotalPrice = (checkIn: Date, checkOut: Date, pricePerDay: number): number => {
  const days = (Number(checkOut) - Number(checkIn)) / dayMs
  return days * pricePerDay
}

const reservation1: Reservation = {
  customerInformation: { name: "Bob", email: "Bob@example.com" },
  checkIn: new Date("2026-04-10"),
  checkOut: new Date("2026-04-12"),
  pricePerDay: 120,
  paymentInformation: { isPayed: true, totalPrice: calcTotalPrice(new Date("2026-04-10"), new Date("2026-04-12"), 120) },
}

const reservations: Reservation[] = [reservation1]

const reservation2: Reservation = {
  customerInformation: { name: "Alice", email: "alice@example.com" },
  checkIn: new Date("2026-04-15"),
  checkOut: new Date("2026-04-18"),
  pricePerDay: 100,
  paymentInformation: { isPayed: false, totalPrice: calcTotalPrice(new Date("2026-04-15"), new Date("2026-04-18"), 100) },
}

reservations.push(reservation2)

reservations.forEach((r) => {
  console.log("customer:", r.customerInformation.name)
  console.log("totalPrice:", r.paymentInformation.totalPrice)
})
