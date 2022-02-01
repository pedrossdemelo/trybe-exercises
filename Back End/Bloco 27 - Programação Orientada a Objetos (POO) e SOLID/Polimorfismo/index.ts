abstract class Person {
  constructor(protected _name: string, protected _birthDate: Date) {
    if (_name.length > 3) this._name = _name;
    if (
      new Date().getFullYear() - _birthDate.getFullYear() < 120 &&
      new Date().getFullYear() - _birthDate.getFullYear() > 0
    )
      this._birthDate = _birthDate;
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    if (name.length > 3) this._name = name;
  }

  get birthDate(): Date {
    return this.birthDate;
  }
  set birthDate(birthDate: Date) {
    if (
      new Date().getFullYear() - birthDate.getFullYear() < 120 &&
      new Date().getFullYear() - birthDate.getFullYear() > 0
    )
      this._birthDate = birthDate;
  }
}

interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}

class Employee extends Person implements Enrollable {
  readonly admissionDate: Date;

  generateEnrollment(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  readonly enrollment: string = this.generateEnrollment();

  constructor(
    name: string,
    birthDate: Date,
    readonly salary: number,
    admissionDate: Date
  ) {
    super(name, birthDate);
    this.admissionDate = admissionDate < new Date() ? admissionDate : new Date();
  }
}

class Student extends Person implements Enrollable {
  readonly enrollment: string = this.generateEnrollment();
  private _examsGrades: number[];
  private _worksGrades: number[];

  generateEnrollment(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._examsGrades = [];
    this._worksGrades = [];
    this.enrollment = this.generateEnrollment();
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }
  set examsGrades(examsGrades: number[]) {
    if (examsGrades.length <= 4) this._examsGrades = examsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }
  set worksGrades(worksGrades: number[]) {
    if (worksGrades.length <= 2) this._worksGrades = worksGrades;
  }

  public sumNotes(): number {
    return this._examsGrades.reduce((acc, cur) => acc + cur, 0) +
      this._worksGrades.reduce((acc, cur) => acc + cur, 0);
  }

  public sumAverageNotes(): number {
    return this.sumNotes() / (this._examsGrades.length + this._worksGrades.length);
  }
}

class Subject {
  constructor(protected _name: string) {
    if (_name.length > 3) this._name = _name;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    if (name.length > 3) this._name = name;
  }
}

class Teacher extends Employee {
  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    admissionDate: Date,
    public subject: Subject
  ) {
    super(name, birthDate, salary, admissionDate);
  }
}