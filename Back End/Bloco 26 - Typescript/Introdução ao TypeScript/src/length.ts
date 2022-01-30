type LengthUnit = "km" | "hm" | "dam" | "m" | "dm" | "cm" | "mm";
export const convert = (
  length: number,
  from: LengthUnit,
  to: LengthUnit
): number => {
  if (from === to) return length;
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