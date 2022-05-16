"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacityUnit = void 0;
exports.CapacityUnit = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
exports.default = (capacity, from, to) => {
    if (from === to)
        return capacity;
    const factors = {
        kl: 1000,
        hl: 100,
        dal: 10,
        l: 1,
        dl: 0.1,
        cl: 0.01,
        ml: 0.001,
    };
    const fromFactor = factors[from];
    const toFactor = factors[to];
    return capacity * fromFactor / toFactor;
};
