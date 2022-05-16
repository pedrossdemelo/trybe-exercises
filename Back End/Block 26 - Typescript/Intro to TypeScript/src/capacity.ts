export const CapacityUnit = ["kl", "hl", "dal", "l", "dl", "cl", "ml"] as const;
type CapacityUnit = typeof CapacityUnit[number];
export default (
  capacity: number,
  from: CapacityUnit,
  to: CapacityUnit
): number => {
  if (from === to) return capacity;
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
}