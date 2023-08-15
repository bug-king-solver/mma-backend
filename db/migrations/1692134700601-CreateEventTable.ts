import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateEventTable1692133396737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE event (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            date DATE,
            location VARCHAR(255)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE event;');
    }

}
