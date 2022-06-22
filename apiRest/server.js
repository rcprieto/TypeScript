import app from './app';

const port = 3010;

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + clique em http://localhost:${port}`);
});
