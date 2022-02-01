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
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
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
    this.admissionDate =
      admissionDate < new Date() ? admissionDate : new Date();
  }
}

class Student extends Person implements Enrollable {
  readonly enrollment: string = this.generateEnrollment();
  private _examsGrades: number[];
  private _worksGrades: number[];
  readonly evaluationResults: EvaluationResult[] = [];

  addEvaluationResult(e: EvaluationResult) {
    this.evaluationResults.push(e);
    switch (e.type) {
      case "exam":
        this._examsGrades.push(e.score);
        break;
      case "work":
        this._worksGrades.push(e.score);
    }
  }

  generateEnrollment(): string {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
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
    return (
      this._examsGrades.reduce((acc, cur) => acc + cur, 0) +
      this._worksGrades.reduce((acc, cur) => acc + cur, 0)
    );
  }

  public sumAverageNotes(): number {
    return (
      this.sumNotes() / (this._examsGrades.length + this._worksGrades.length)
    );
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

class Evaluation {
  get score(): number {
    return this._score;
  }
  set score(score: number) {
     switch (this.type) {
      case "exam":
        if (score >= 0 && score <= 25) this._score = score;
        else throw new Error("Invalid score");
        break;
      case "work":
        if (score >= 0 && score <= 50) this._score = score;
        else throw new Error("Invalid score");
        break;
    }
 }
  
  constructor(
    private _score: number,
    public teacher: Teacher,
    public type: "exam" | "work"
  ) {}
}

class EvaluationResult {
  readonly type = this.evaluation.type;
  get score() {
    return this._score;
  }
  set score(score: number) {
    if (score > this.evaluation.score)
      throw new Error("Score cannot be higher than evaluation score");
  }
  constructor(public evaluation: Evaluation, private _score: number) {
    this.score = _score;
  }
}

const PrimaryExam = new Evaluation(
  10,
  new Teacher(
    "Teacher",
    new Date(1999, 1, 1),
    1000,
    new Date(2018, 1, 1),
    new Subject("Math")
  ),
  "exam"
);

const myResult = new EvaluationResult(PrimaryExam, 10);

console.log(myResult.score);
