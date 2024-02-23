import { Repository } from 'typeorm';
import { Service } from 'typedi';

import { HttpException } from '@/exceptions/httpException';
import { MOCKPIEntity } from '@/entities/mockpi.entity';
import { IMocKPI } from '@/interfaces/mockpi.interface';

@Service()
export class MocKPIService extends Repository<MOCKPIEntity> {
  public async findAllKPI(): Promise<IMocKPI[]> {
    console.log('moc kpis');
    const data: IMocKPI[] = await MOCKPIEntity.find({
      relations: {
        createdBy: true,
      },
    });
    return data;
  }

  public async findKPIById(id: number): Promise<IMocKPI> {
    const data: IMocKPI = await MOCKPIEntity.findOne({ where: { id: id }, relations: { createdBy: true, updatedBy: true } });
    if (!data) throw new HttpException(409, "data doesn't exist");

    return data;
  }

  public async createKPI(data: IMocKPI): Promise<IMocKPI> {
    const kpi: IMocKPI = await MOCKPIEntity.findOne({ where: { year: data.year } });
    if (kpi) throw new HttpException(409, `kpi for ${kpi.year} already exists`);
    const createKPIData: IMocKPI = await MOCKPIEntity.create({ ...data }).save();
    return createKPIData;
  }

  public async updateKPI(id: number, data: IMocKPI): Promise<IMocKPI> {
    const kpi: IMocKPI = await MOCKPIEntity.findOne({ where: { id: id } });
    if (!kpi) throw new HttpException(409, "data doesn't exist");

    await MOCKPIEntity.update(id, { ...data });

    const updatedData: IMocKPI = await MOCKPIEntity.findOne({ where: { id: id } });
    return updatedData;
  }

  public async deleteKPI(id: number): Promise<IMocKPI> {
    const data: IMocKPI = await MOCKPIEntity.findOne({ where: { id: id } });
    if (!data) throw new HttpException(409, "data doesn't exist");

    await MOCKPIEntity.delete({ id: id });
    return data;
  }
}
