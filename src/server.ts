import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({message: 'Brilha lua'})
})

app.listen(3333, () => {
  console.log('Server rodado na porta 3333')
})