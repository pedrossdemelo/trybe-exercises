async function math(n1,n2,n3) {
  return new Promise((resolve,reject) => {
    if ([...arguments].some(n => typeof n !== 'number')) reject('Argumentos inválidos'); 
    const result = (n1 + n2) * n3;
    if (result<50) reject('Resultado menor que 50');
    resolve(result);
  });
};