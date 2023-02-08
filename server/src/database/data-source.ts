import { DataSource } from "typeorm";

const appDataSource = new DataSource({
    type: "postgres",
    host: "db_supergym",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "supergym_db",
    entities: ["./src/models/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
    synchronize: true,
});

export default appDataSource;