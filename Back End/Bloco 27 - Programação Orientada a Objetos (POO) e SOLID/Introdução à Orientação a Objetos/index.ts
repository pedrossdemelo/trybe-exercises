type examGrades = [number, number, number, number];
type projectGrades = [number, number];

class Student {
  constructor(
    public enrollment: number,
    public name: string,
    public examGrades: examGrades,
    public projectGrades: projectGrades
  ) {}
}