type examGrades = [number, number, number, number];
type projectGrades = [number, number];

class Student {
  constructor(
    public enrollment: number,
    public name: string,
    public examGrades: examGrades,
    public projectGrades: projectGrades
  ) {}
  get gradeSum(): number {
    return this.examGrades.reduce((acc, curr) => acc + curr, 0) + this.projectGrades.reduce((acc, curr) => acc + curr, 0);
  }
  get gradeAverage(): number {
    return this.gradeSum / (this.examGrades.length + this.projectGrades.length);
  }
}

class Client {
  constructor(public name: string) {}
}

class Item {
  constructor(public name: string, public price: number) {}
}

class Order {
  constructor(
    public client: Client,
    public items: Item[],
    public payment: string,
    public discount: number
  ) {}
  get totalBeforeDiscount(): number {
    return this.items.reduce((acc, curr) => acc + curr.price, 0);
  }
  get total(): number {
    return this.totalBeforeDiscount * (1 - this.discount);
  }
}

class Data {
  constructor(
    public day: number,
    public month: number,
    public year: number
  ) {}
}