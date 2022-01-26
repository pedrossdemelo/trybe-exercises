// Atividade 1

// Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
//     username deve ter mais de 3 caracteres;
//     email deve ter o formato email@mail.com;
//     password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
//     Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
//     Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" } ;
// Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
//     O formato desse token retornado deve ser uma string aleatória com 12 caracteres;
//     O email recebido deve ter o formato email@mail.com;
//     O password deve conter no mínimo 4 caracteres e no máximo 8, todos números;
//     Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "email or password is incorrect" }
//     Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 200 e { "token": "86567349784e" } ;

// Dicas: separe suas rotas em arquivos e utilize middlewares para validar os campos recebidos nas requisições 

const express = require('express');
const app = express();
const rescue = require('express-rescue');
const router = express.Router();
app.use(express.json());

const validateCredentials = (req, _, next) => {
  const { username, email, password } = req.body;
  const invalidData = {
    code: "Invalid data",
    status: 400
  }
  if (username.length < 3 && username !== undefined)
    return next({ ...invalidData, message: 'Username must have more than 3 characters' });
  if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/))
    return next({ ...invalidData, message: 'Invalid email' });
  if (password.length < 4 || password.length > 8)
    return next({ ...invalidData, message: 'Password must be between 4 and 8 characters' });
  return next();
}