import express from 'express';
import './db';

const app = express();

app.get('/', (req, res) =>
  res.send('My Capital API - deployed by github actions!')
);

export default app;
