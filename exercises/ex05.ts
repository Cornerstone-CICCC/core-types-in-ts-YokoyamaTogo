enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const currentDay: Day = Day.Wednesday
console.log("Current day:", Day[currentDay])

type Race = {
  name: string
  participants: string[]
  first: string
  second: string
  third: string
  day: Day
}

const race: Race = {
  name: "City Sprint",
  participants: ["Bob", "Mina", "Alice"],
  first: "Bob",
  second: "Alice",
  third: "Mina",
  day: Day.Saturday,
}

console.log(race)
