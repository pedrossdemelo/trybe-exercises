"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassUnit = void 0;
exports.MassUnit = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
exports.default = (mass, from, to) => {
    if (from === to)
        return mass;
    const factors = {
        kg: 1000,
        hg: 100,
        dag: 10,
        g: 1,
        dg: 0.1,
        cg: 0.01,
        mg: 0.001,
    };
    const fromFactor = factors[from];
    const toFactor = factors[to];
    return mass * fromFactor / toFactor;
};
