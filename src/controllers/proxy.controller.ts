import { NextFunction, Request, Response } from 'express';
import { proxyFetch } from '@/services/proxyLogin';

export class ProxyController {
  public fetchData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const url = req.url.slice('/proxy-data'.length);
      const token = req.header('Authorization');
      //   const userData = req.body;
      const response = await proxyFetch({ token, url });
      //   console.log(response.data);
      const data = response.data;
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  };
}
