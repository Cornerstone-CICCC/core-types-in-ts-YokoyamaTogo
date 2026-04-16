"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    if (typeof id === "number") {
        console.log(`number id: ${id}`);
        return id;
    }
    console.log(`string id: ${id}`);
    return id;
}
printId(123);
printId("abc-001");
//# sourceMappingURL=ex06.js.map