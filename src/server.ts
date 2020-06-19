import express from 'express';


const app = express();


app.get('/', (request, response) => {
  return response.json({message: 'oie'});
})


app.listen(3333);