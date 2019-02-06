import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import jwt from './jwt';
import errorHandler from './errorHandler';
import authorizationHandler from './controllers/authorization';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(jwt());

app.use('/api/users/', authorizationHandler);

app.use(express.static(path.join(__dirname, '../../client/build')));

app.use('/main', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.use(errorHandler);

app.listen(4000);

export default app;
