import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ProxyController } from '@/controllers/proxy.controller';

export class ProxyRoute implements Routes {
  public path = '/proxy-data';
  public router = Router();
  public proxyController = new ProxyController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/dhis/utilization`, this.proxyController.fetchData);
    this.router.get(`${this.path}/state-assessment-indicators/proportion`, this.proxyController.fetchData);
    this.router.get(`${this.path}/lga-assessment-indicators/proportion`, this.proxyController.fetchData);
    this.router.get(`${this.path}/lga-assessments/count/lga/:id`, this.proxyController.fetchData);
    this.router.get(`${this.path}/state-assessments/count/state/:id`, this.proxyController.fetchData);
    this.router.get(`${this.path}/assessments/m-and-e/count/hf/:id`, this.proxyController.fetchData);
    this.router.get(`${this.path}/me-assessment-indicators/proportion`, this.proxyController.fetchData);
    this.router.get(`${this.path}/locations/lgas`, this.proxyController.fetchData);
    this.router.get(`${this.path}/locations/wards`, this.proxyController.fetchData);
    this.router.get(`${this.path}/facilities`, this.proxyController.fetchData);
    this.router.get(`${this.path}/locations/states`, this.proxyController.fetchData);
    this.router.get(`${this.path}/assessments/m-and-e/count/all`, this.proxyController.fetchData);
  }
}
