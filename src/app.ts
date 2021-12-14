import express from 'express';
import './db';

const app = express();

app.get('/', (req, res) => res.send('My Capital API'));

export default app;
