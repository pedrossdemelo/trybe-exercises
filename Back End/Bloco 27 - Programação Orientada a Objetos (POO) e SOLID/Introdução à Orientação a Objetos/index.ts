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
    return (
      this.examGrades.reduce((acc, curr) => acc + curr, 0) +
      this.projectGrades.reduce((acc, curr) => acc + curr, 0)
    );
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
  private _isValidDate(day: number, month: number, year: number): boolean {
    return day > 0 && day <= 31 && month > 0 && month <= 12 && year > 1900;
  }
  constructor(public day: number, public month: number, public year: number) {
    if (!this._isValidDate(this.day, this.month, this.year)) {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
    }
  }
  get monthName(): string {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][this.month - 1];
  }
  get isLeapYear(): boolean {
    return (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0;
  }
  compare(other: Data): number {
    if (
      other.day === this.day &&
      other.month === this.month &&
      other.year === this.year
    )
      return 0;
    if (
      other.year > this.year ||
      (other.year == this.year && other.month > this.month) ||
      (other.year == this.year &&
        other.month == this.month &&
        other.day > this.day)
    )
      return 1;
    return -1;
  }

  private _pad(num: number, size: number): string {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  format(format: string): string {
    const { day, month, year, monthName, _pad } = this;
    let result = format;
    result = result.replace("aaaa", _pad(year, 4));
    result = result.replace("aa", _pad(year % 100, 2));
    result = result.replace("mm", _pad(month, 2));
    result = result.replace("M", monthName);
    result = result.replace("dd", _pad(day, 2));
    return result;
  }
}
