"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayMs = 1000 * 60 * 60 * 24;
const calcTotalPrice = (checkIn, checkOut, pricePerDay) => {
    const days = (Number(checkOut) - Number(checkIn)) / dayMs;
    return days * pricePerDay;
};
const reservation1 = {
    customerInformation: { name: "Aki", email: "aki@example.com" },
    checkIn: new Date("2026-04-10"),
    checkOut: new Date("2026-04-12"),
    pricePerDay: 120,
    paymentInformation: { isPayed: true, totalPrice: calcTotalPrice(new Date("2026-04-10"), new Date("2026-04-12"), 120) },
};
const reservations = [reservation1];
const reservation2 = {
    customerInformation: { name: "Mina", email: "mina@example.com" },
    checkIn: new Date("2026-04-15"),
    checkOut: new Date("2026-04-18"),
    pricePerDay: 100,
    paymentInformation: { isPayed: false, totalPrice: calcTotalPrice(new Date("2026-04-15"), new Date("2026-04-18"), 100) },
};
reservations.push(reservation2);
reservations.forEach((r) => {
    console.log(r);
    console.log("customer:", r.customerInformation.name);
    console.log("totalPrice:", r.paymentInformation.totalPrice);
});
//# sourceMappingURL=ex03.js.map