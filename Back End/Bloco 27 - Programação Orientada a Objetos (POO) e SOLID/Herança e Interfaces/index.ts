class Person {
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

class Student extends Person {
  readonly enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];
  private generateEnrollment(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += chars.at(Math.floor(Math.random() * chars.length));
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

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
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

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;
  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    subject: Subject
  ) {
    super(name, birthDate);
    this._subject = subject;
    this._registration = this.generateRegistration();
    this._salary = salary;
    this._admissionDate = new Date();
  }
  get subject(): Subject {
    return this._subject;
  }
  set subject(subject: Subject) {
    this._subject = subject;
  }
  get registration(): string {
    return this._registration;
  }
  set registration(registration: string) {
    if (registration.length > 16) this._registration = registration;
  }
  get salary(): number {
    return this._salary;
  }
  set salary(salary: number) {
    if (salary > 0) this._salary = salary;
  }
  get admissionDate(): Date {
    return this._admissionDate;
  }
  set admissionDate(admissionDate: Date) {
    if (admissionDate.getFullYear() < new Date().getFullYear())
      this._admissionDate = admissionDate;
  }
  generateRegistration(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += chars.at(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}