import 'dotenv/config';
import express from 'express';
import notesRoutes from './routes/notes.route';
import morgan from 'morgan';
import * as middlewares from './middlewares';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/notes', notesRoutes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
