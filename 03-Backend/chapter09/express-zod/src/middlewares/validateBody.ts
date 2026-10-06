import type { RequestHandler } from 'express';
import type { ZodObject } from 'zod/v4';
import { z } from 'zod/v4';

const validateBody = (zodSchema: ZodObject): RequestHandler => {
  return (req, res, next) => {
    if (!req.body) {
      new Error('Request body is missing.', { cause: { status: 400 } });
    }

    const { data, error, success } = zodSchema.safeParse(req.body);

    if (!success) {
      console.log(error);
      new Error(z.prettifyError(error), {
        cause: {
          status: 400,
        },
      });
    } else {
      next();
    }
  };
};

export default validateBody;
