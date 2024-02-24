import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany, Relation } from 'typeorm';
import { User } from '@interfaces/users.interface';
import { MOCKPIEntity } from './mockpi.entity';

@Entity()
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Unique(['email'])
  email: string;

  @Column()
  @IsNotEmpty()
  lastName: string;

  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsNotEmpty()
  locationId: string;

  @Column()
  @IsNotEmpty()
  access: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => MOCKPIEntity, kpi => kpi.createdBy)
  kpiCreated: Relation<MOCKPIEntity>[];

  @OneToMany(() => MOCKPIEntity, kpi => kpi.updatedBy)
  kpiUpdated: Relation<MOCKPIEntity>[];

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
