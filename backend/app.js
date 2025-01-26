import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
connect();

const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.send('Hello API!');
});

export default app;