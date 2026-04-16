function printDirection(direction: "left" | "right"): void {
  if (direction === "left") {
    console.log("Moving to the left")
    return
  }

  console.log("Moving to the right")
}

printDirection("left")
printDirection("right")
