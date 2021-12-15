import app from './src/app';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
