import * as express from "express";
import { eachSeries } from "async";

type RequestPromiseHandlder = (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<any>;

function asyncMiddleware(func: RequestPromiseHandlder | RequestPromiseHandlder[]) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (Array.isArray(func)) {
      return eachSeries(func as express.RequestHandler[], (f, cb) => {
        return Promise.resolve(f(req, res, cb)).catch(err => next(err));
      });
    } else {
      return Promise.resolve(func(req, res, next)).catch(err => next(err));
    }
  };
}

export { asyncMiddleware };
