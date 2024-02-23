import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IMocKPI } from '@/interfaces/mockpi.interface';
import { UserEntity } from './users.entity';
@Entity()
export class MOCKPIEntity extends BaseEntity implements IMocKPI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  totalBuget: number;

  @Column()
  @IsNotEmpty()
  budgetPercentInc: number;

  @Column()
  @IsNotEmpty()
  coveragePercenttInc: number;

  @Column()
  @IsNotEmpty()
  year: number;

  @ManyToOne(() => UserEntity, user => user.kpiCreated)
  createdBy: UserEntity;

  @ManyToOne(() => UserEntity, user => user.kpiUpdated)
  updatedBy: UserEntity;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
