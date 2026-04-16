function printId(id: number | string): number | string {
  if (typeof id === "number") {
    console.log(`number id: ${id}`)
    return id
  }

  console.log(`string id: ${id}`)
  return id
}

printId(123)
printId("abc-001")
