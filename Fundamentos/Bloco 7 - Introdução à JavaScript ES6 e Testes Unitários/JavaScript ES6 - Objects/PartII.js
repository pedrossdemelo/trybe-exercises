const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (obj, key, value) => {
  obj[key] = value;
}

addShift(lesson2, 'turno', 'noite');

console.log(lesson2);

const listKeys = obj => Object.keys(obj);

console.log(listKeys(lesson2));

const size = obj => Object.keys(obj).length;

console.log(size(lesson2));

const listValues = obj => Object.values(obj);

console.log(listValues(lesson2));

const allLessons = (lesson1, lesson2, lesson3) => Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons(lesson1, lesson2, lesson3));