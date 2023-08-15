import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateRankingTable1692133403205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE ranking (
                id SERIAL PRIMARY KEY,
                weight_class VARCHAR(50),
                fighter_id INTEGER REFERENCES fighter(id),
                rank INTEGER
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE ranking;');
    }

}
