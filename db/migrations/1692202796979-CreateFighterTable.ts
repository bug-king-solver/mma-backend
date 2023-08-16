import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFighterTable1692202796979 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "fighter" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL DEFAULT '',
        "weight_class" character varying NOT NULL DEFAULT '',
        "nationality" character varying NOT NULL DEFAULT '',
        "team" character varying NOT NULL DEFAULT '',
        "wins" integer NOT NULL DEFAULT 0,
        "losses" integer NOT NULL DEFAULT 0,
        "knockouts" integer NOT NULL DEFAULT 0,
        "submissions" integer NOT NULL DEFAULT 0,
        CONSTRAINT "PK_9f31d22f9214e6b1768adfd7f7e" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "fighter"');
  }
}
