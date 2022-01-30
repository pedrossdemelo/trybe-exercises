type VolumeUnit = "km3" | "hm3" | "dam3" | "m3" | "dm3" | "cm3" | "mm3";
export const convert = (
  volume: number,
  from: VolumeUnit,
  to: VolumeUnit
): number => {
  if (from === to) return volume;
  const factors = {
    km3: 1000000000,
    hm3: 1000000,
    dam3: 1000,
    m3: 1,
    dm3: 0.001,
    cm3: 0.000001,
    mm3: 0.000000001,
  };
  const fromFactor = factors[from];
  const toFactor = factors[to];
  return volume * fromFactor / toFactor;
}
console.log(convert(1, "km3", "m3"));