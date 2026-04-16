function displayValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("string:", value)
    return
  }

  if (typeof value === "number") {
    console.log("number:", value)
  }
}

function processUnknown(value: unknown): void {
  if (typeof value === "string") {
    for (const ch of value) {
      console.log(ch)
    }
  }
}

displayValue("hello")
displayValue(42)
processUnknown("TypeScript")
