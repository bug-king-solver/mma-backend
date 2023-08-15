import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateFighterTable1692133248419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE fighter (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                weight_class VARCHAR(50),
                nationality VARCHAR(100),
                team VARCHAR(100),
                wins INTEGER,
                losses INTEGER,
                knockouts INTEGER,
                submissions INTEGER
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE fighter;');
    }

}
