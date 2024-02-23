import { IsNumber } from 'class-validator';

export class CreateMocKPIDto {
  @IsNumber()
  public totalBuget: number;

  @IsNumber()
  public budgetPercentInc: number;

  @IsNumber()
  public coveragePercenttInc: number;

  @IsNumber()
  public year: number;

  @IsNumber()
  public createdBy: number;
}

export class UpdateMocKPIDto {
  @IsNumber()
  public totalBuget: number;

  @IsNumber()
  public budgetPercentInc: number;

  @IsNumber()
  public coveragePercenttInc: number;

  @IsNumber()
  public year: number;

  @IsNumber()
  public updatedBy: number;
}
