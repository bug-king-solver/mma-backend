import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateFightTable1692133140408 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE fight (
                id SERIAL PRIMARY KEY,
                event_id INTEGER REFERENCES event(id),
                fighter1_id INTEGER REFERENCES fighter(id),
                fighter2_id INTEGER REFERENCES fighter(id),
                result VARCHAR(50)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE fight;');
    }

}
