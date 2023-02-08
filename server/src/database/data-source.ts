import { DataSource } from "typeorm";

const appDataSource = new DataSource({
    type: "postgres",
    host: "172.25.0.3",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "supergym_db",
    entities: ["./src/models/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
});

export default appDataSource;