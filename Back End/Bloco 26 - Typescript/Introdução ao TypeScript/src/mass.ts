type MassUnit = "kg" | "hg" | "dag" | "g" | "dg" | "cg" | "mg";
export default (mass: number, from: MassUnit, to: MassUnit): number => {
  if (from === to) return mass;
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
}