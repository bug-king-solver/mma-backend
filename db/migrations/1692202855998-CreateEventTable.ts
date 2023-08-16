import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEventTable1692202855998 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "event" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL DEFAULT '',
        "date" TIMESTAMP NOT NULL DEFAULT now(),
        "location" character varying NOT NULL DEFAULT '',
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "event"');
  }
}