import { CreateMocKPIDto, UpdateMocKPIDto } from './../dtos/mockpi.dto';
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { MocKPIController } from '@/controllers/mocKPI.controller';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class MocKPIRoute implements Routes {
  public path = '/moc-kpis';
  public router = Router();
  public kpiController = new MocKPIController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, AuthMiddleware, this.kpiController.getKPIs);
    this.router.get(`${this.path}/:id(\\d+)`, AuthMiddleware, this.kpiController.getKPIById);
    this.router.post(`${this.path}`, [AuthMiddleware, ValidationMiddleware(CreateMocKPIDto)], this.kpiController.createKPI);
    this.router.put(`${this.path}/:id(\\d+)`, [AuthMiddleware, ValidationMiddleware(UpdateMocKPIDto)], this.kpiController.updateKPI);
    this.router.delete(`${this.path}/:id(\\d+)`, AuthMiddleware, this.kpiController.deleteKPI);
  }
}
