function throwError(message: string): never {
  throw new Error(message)
  // return "something"
}

try {
  throwError("This is a never error")
} catch (error) {
  console.log("Caught (never):", (error as Error).message)
}
