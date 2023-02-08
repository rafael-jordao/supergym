import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategoriesTable1674753339372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(new Table({
            name: 'categories',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'icon',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'category',
                    type: 'varchar',
                    isUnique: true,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');

        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
