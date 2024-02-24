import { join } from 'path';
import { DataSource } from 'typeorm';
import { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_DATABASE } from '../config';

export const AppDataSource = new DataSource({
  type: 'mysql',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: +POSTGRES_PORT,
  database: POSTGRES_DATABASE,
  synchronize: false,
  logging: false,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: ['src/database/migrations/**/*.ts'],
  subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],
});

// npx typeorm-ts-node-esm migration:generate ./src/database/migrations/createUser -d ./src/database/index.ts
