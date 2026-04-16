type Coordinate = [number, number]

const coordinate: Coordinate = [10, 20]

type Location = {
  description: string
  coordinate: Coordinate
}

const location: Location = {
  description: "Hotel entrance",
  coordinate,
}

console.log(location)
console.log("x:", coordinate[0], "y:", coordinate[1])
