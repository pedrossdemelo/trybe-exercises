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