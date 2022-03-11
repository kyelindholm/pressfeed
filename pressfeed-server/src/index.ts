import express from 'express';
const app = express();
const PORT: number = 8000;

console.log('Hello, World!');



app.listen(PORT, () => {
  console.log(`Server listening at http:/localhost:${PORT}`);
});