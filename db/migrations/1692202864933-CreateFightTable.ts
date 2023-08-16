import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFightTable1692202864933 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "fight" (
        "id" SERIAL NOT NULL,
        "event_id" integer,
        "fighter1_id" integer,
        "fighter2_id" integer,
        "result" character varying NOT NULL DEFAULT '',
        CONSTRAINT "PK_c7df0fe0769a5cf3a9de1a4f6cc" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      ALTER TABLE "fight" ADD CONSTRAINT "FK_2567a6982d44d75ba59e6dfea21" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
    await queryRunner.query(`
      ALTER TABLE "fight" ADD CONSTRAINT "FK_717b97c41c6c6c24398f0ad6639" FOREIGN KEY ("fighter1_id") REFERENCES "fighter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
    await queryRunner.query(`
      ALTER TABLE "fight" ADD CONSTRAINT "FK_196fb47ea775ad221b181c8eb20" FOREIGN KEY ("fighter2_id") REFERENCES "fighter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "fight" DROP CONSTRAINT "FK_196fb47ea775ad221b181c8eb20"');
    await queryRunner.query('ALTER TABLE "fight" DROP CONSTRAINT "FK_717b97c41c6c6c24398f0ad6639"');
    await queryRunner.query('ALTER TABLE "fight" DROP CONSTRAINT "FK_2567a6982d44d75ba59e6dfea21"');
    await queryRunner.query('DROP TABLE "fight"');
  }
}