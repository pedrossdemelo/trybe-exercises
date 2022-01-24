async function promiseMath(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if ([...arguments].some((n) => typeof n !== "number"))
      reject("Argumentos inválidos");
    const result = (n1 + n2) * n3;
    if (result < 50) reject("Valor muito baixo");
    resolve(result);
  });
}

(async function consumePromise() {
  const randomInt = () => Math.floor(Math.random() * 100 + 1);
  try {
    const result = await promiseMath(randomInt(), randomInt(), randomInt());
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
