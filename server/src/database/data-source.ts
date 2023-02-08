import { DataSource } from "typeorm";

const appDataSource = new DataSource({
    type: "postgres",
    host: "172.27.0.2",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "supergym_db",
    entities: ["./src/models/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
    synchronize: true,
});

export default appDataSource;