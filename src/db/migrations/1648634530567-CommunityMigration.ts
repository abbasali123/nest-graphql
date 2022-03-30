import { MigrationInterface, QueryRunner } from 'typeorm';

export class CommunityMigration1648634530567 implements MigrationInterface {
  name = 'CommunityMigration1648634530567';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "community" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_cae794115a383328e8923de4193" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "community"`);
  }
}
