import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRankingTable1692202876290 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "ranking" (
        "id" SERIAL NOT NULL,
        "weight_class" character varying NOT NULL DEFAULT '',
        "fighter_id" integer,
        "rank" integer NOT NULL DEFAULT 0,
        CONSTRAINT "PK_2fb8d258cda2d97851d6b1c49c2" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      ALTER TABLE "ranking"
      ADD CONSTRAINT "FK_5b60f1c70254d697d51052c320d"
      FOREIGN KEY ("fighter_id")
      REFERENCES "fighter"("id")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "ranking" DROP CONSTRAINT "FK_5b60f1c70254d697d51052c320d"');
    await queryRunner.query('DROP TABLE "ranking"');
  }
}
