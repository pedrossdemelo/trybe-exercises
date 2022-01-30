type PizzaSliceCount = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: PizzaSliceCount;
}

const Calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8,
};

const Marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6,
};

const Nutella: Pizza = {
  flavor: "Nutella",
  slices: 4,
};

type CommonFlavours = "Calabresa" | "Frango" | "Pepperoni";

type VegetarianFlavours = "Marguerita" | "Palmito" | "Cogumelo";

type DessertFlavours = "Nutella" | "Goiabada com Queijo" | "Marshmallow";

interface CommonPizza extends Pizza {
  flavor: CommonFlavours;
}

interface VegetarianPizza extends Pizza {
  flavor: VegetarianFlavours;
}

interface DessertPizza extends Pizza {
  flavor: DessertFlavours;
  slices: 4;
}

const CalabresaPizza: CommonPizza = {
  flavor: "Calabresa",
  slices: 8,
};

const MargueritaPizza: VegetarianPizza = {
  flavor: "Marguerita",
  slices: 6,
};

const NutellaPizza: DessertPizza = {
  flavor: "Nutella",
  slices: 4,
};

const PalmitoPizza: VegetarianPizza = {
  flavor: "Palmito",
  slices: 6,
};

const FrangoPizza: CommonPizza = {
  flavor: "Frango",
  slices: 8,
};

const PepperoniPizza: CommonPizza = {
  flavor: "Pepperoni",
  slices: 8,
};