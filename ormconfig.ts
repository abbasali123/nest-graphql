import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'Tasks',
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
  subscribers: ['src/subscriber'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export default config;
