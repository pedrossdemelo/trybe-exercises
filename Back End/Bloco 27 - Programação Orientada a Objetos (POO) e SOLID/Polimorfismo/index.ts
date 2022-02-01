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
    if (this._examsGrades.length < 4 && e.evaluation instanceof Exam) {
      this._examsGrades.push(e.score);
    }
    if (this._worksGrades.length < 2 && e.evaluation instanceof Work) {
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

abstract class Evaluation {
  get score(): number {
    return this._score;
  }
  set score(score: number) {
    if (score >= 0) this._score = score;
  }

  constructor(protected _score: number, public teacher: Teacher) {
  }
}

class Exam extends Evaluation {
  get score(): number {
    return this._score;
  }
  set score(score: number) {
    if (score >= 0 && score < 25) this._score = score;
    else throw new Error("Exam score must be between 0 and 25");
  }

  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
    this.score = score;
  }
}

class EvaluationResult {
  get score() {
    return this._score;
  }
  set score(score: number) {
    if (score > this.evaluation.score)
      throw new Error("Score cannot be higher than evaluation score");
  }
  constructor(readonly evaluation: Evaluation, private _score: number) {
    this.score = _score;
  }
}
class Work extends Evaluation {
  get score(): number {
    return this._score;
  }
  set score(score: number) {
    if (score >= 0 && score < 50) this._score = score;
    else throw new Error("Work score must be between 0 and 50");
  }

  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
    this.score = score;
  }
}