import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions ={
    type: process.env.DB_TYPE as any,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: true,
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource