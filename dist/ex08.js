"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayValue(value) {
    if (typeof value === "string") {
        console.log("string:", value);
        return;
    }
    if (typeof value === "number") {
        console.log("number:", value);
    }
}
function processUnknown(value) {
    if (typeof value === "string") {
        for (const ch of value) {
            console.log(ch);
        }
    }
}
displayValue("hello");
displayValue(42);
processUnknown("TypeScript");
//# sourceMappingURL=ex08.js.map