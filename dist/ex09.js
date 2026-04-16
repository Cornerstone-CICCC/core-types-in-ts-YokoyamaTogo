"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(message) {
    throw new Error(message);
    // return "something"
}
try {
    throwError("This is a never error");
}
catch (error) {
    console.log("Caught (never):", error.message);
}
//# sourceMappingURL=ex09.js.map