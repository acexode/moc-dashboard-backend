import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { MocKPIService } from '@services/mocKPI.services';
import { IMocKPI } from '@/interfaces/mockpi.interface';

export class MocKPIController {
  public mocKPI = Container.get(MocKPIService);

  public getKPIs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log('get all');
      const findAllData: IMocKPI[] = await this.mocKPI.findAllKPI();

      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getKPIById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const kpiId = Number(req.params.id);
      const findOneKPIData: IMocKPI = await this.mocKPI.findKPIById(kpiId);

      res.status(200).json({ data: findOneKPIData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createKPI = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const KPIData: IMocKPI = req.body;
      const createKPIData: IMocKPI = await this.mocKPI.createKPI(KPIData);

      res.status(201).json({ data: createKPIData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateKPI = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const KPIId = Number(req.params.id);
      const KPIData: IMocKPI = req.body;
      const updateKPIData: IMocKPI = await this.mocKPI.updateKPI(KPIId, KPIData);

      res.status(200).json({ data: updateKPIData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteKPI = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const KPIId = Number(req.params.id);
      const deleteKPIData: IMocKPI = await this.mocKPI.deleteKPI(KPIId);

      res.status(200).json({ data: deleteKPIData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
