import 'dotenv/config';
import express from 'express';
import notesRoutes from './routes/notes.route';
import helmet from 'helmet';
import morgan from 'morgan';
import * as middlewares from './middlewares';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Welcome to our Todo API');
});

app.use('/api/notes', notesRoutes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
