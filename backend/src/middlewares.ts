import { Request, Response, NextFunction } from 'express';
import createHttpError, { isHttpError } from 'http-errors';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(createHttpError(404, 'Endpoint not found'));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = 'Internal server error';
  let statusCode = 500;

  if (isHttpError(error)) {
    errorMessage = error.message;
    statusCode = error.status;
  }

  return res.status(statusCode).json({ error: errorMessage });
};
