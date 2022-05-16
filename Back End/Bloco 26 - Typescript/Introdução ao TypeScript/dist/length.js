"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LengthUnit = void 0;
exports.LengthUnit = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
exports.default = (length, from, to) => {
    if (from === to)
        return length;
    const factors = {
        km: 1000,
        hm: 100,
        dam: 10,
        m: 1,
        dm: 0.1,
        cm: 0.01,
        mm: 0.001,
    };
    const fromFactor = factors[from];
    const toFactor = factors[to];
    return length * fromFactor / toFactor;
};
